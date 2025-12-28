/**
 * Coolify SSH Client
 *
 * @deprecated Use CoolifyAPIClient (coolify-api.ts) instead.
 * HTTP API is more reliable and doesn't require SSH key management.
 * This SSH client is kept as a fallback option for advanced users.
 *
 * Provides programmatic access to Coolify deployment logs and status via SSH
 *
 * Requires environment variables:
 * - COOLIFY_SSH_HOST: SSH server hostname (e.g., 95.217.155.28)
 * - COOLIFY_SSH_USER: SSH username (default: root)
 * - COOLIFY_SSH_KEY: SSH private key (multiline)
 */

import { exec, execSync } from "child_process";
import { promisify } from "util";
import { writeFileSync, unlinkSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

const execAsync = promisify(exec);

export interface CoolifySSHConfig {
  host: string;
  user: string;
  key: string;
}

export interface DeploymentStatus {
  id: string;
  status: "in_progress" | "success" | "failed" | "unknown";
  buildTime?: number;
  logs?: string;
}

export class CoolifySSHClient {
  private config: CoolifySSHConfig;
  private keyFile: string | null = null;

  constructor(config?: CoolifySSHConfig) {
    this.config = config || this.loadFromEnv();
  }

  /**
   * Load Coolify SSH configuration from environment variables
   */
  private loadFromEnv(): CoolifySSHConfig {
    const host = process.env.COOLIFY_SSH_HOST;
    const user = process.env.COOLIFY_SSH_USER || "root";
    const key = process.env.COOLIFY_SSH_KEY;

    if (!host || !key) {
      throw new Error(
        "Missing Coolify SSH configuration. Set COOLIFY_SSH_HOST and COOLIFY_SSH_KEY environment variables."
      );
    }

    return { host, user, key };
  }

  /**
   * Create temporary SSH key file for this session
   */
  private createKeyFile(): string {
    if (this.keyFile) {
      return this.keyFile;
    }

    const keyFile = join(
      tmpdir(),
      `coolify-key-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    );
    writeFileSync(keyFile, this.config.key);

    // Make key readable only by owner
    if (process.platform !== "win32") {
      execSync(`chmod 600 "${keyFile}"`);
    }

    this.keyFile = keyFile;
    return keyFile;
  }

  /**
   * Clean up temporary key file
   */
  cleanup(): void {
    if (this.keyFile) {
      try {
        unlinkSync(this.keyFile);
      } catch (err) {
        // Ignore cleanup errors
      }
      this.keyFile = null;
    }
  }

  /**
   * Test SSH connection to Coolify server
   */
  async testConnection(): Promise<boolean> {
    try {
      const keyFile = this.createKeyFile();
      const cmd = `ssh -i "${keyFile}" -o StrictHostKeyChecking=no -o ConnectTimeout=5 ${this.config.user}@${this.config.host} "echo 'SSH connection successful'"`;

      const { stdout } = await execAsync(cmd, { timeout: 10000 });
      return stdout.includes("SSH connection successful");
    } catch (error) {
      console.error("SSH connection test failed:", error);
      return false;
    }
  }

  /**
   * Get deployment logs for a specific deployment ID
   */
  async getDeploymentLogs(deploymentId: string): Promise<string> {
    try {
      const keyFile = this.createKeyFile();

      // Query Coolify Docker container for deployment logs
      // Note: Adjust this based on actual Coolify log storage location
      const cmd = `ssh -i "${keyFile}" -o StrictHostKeyChecking=no ${this.config.user}@${this.config.host} "docker logs coolify_app_1 2>&1 | grep -A 50 '${deploymentId}' | head -100"`;

      const { stdout } = await execAsync(cmd, { timeout: 30000 });
      return stdout || "No logs found for deployment";
    } catch (error) {
      console.error("Failed to get deployment logs:", error);
      return "Error retrieving logs";
    }
  }

  /**
   * Get deployment status
   */
  async getDeploymentStatus(deploymentId: string): Promise<DeploymentStatus> {
    try {
      const keyFile = this.createKeyFile();

      // Query Coolify database or logs for deployment status
      const cmd = `ssh -i "${keyFile}" -o StrictHostKeyChecking=no ${this.config.user}@${this.config.host} "docker exec coolify_database_1 psql -U postgres -d coolify -c \"SELECT status, created_at FROM deployment_logs WHERE deployment_id = '${deploymentId}' ORDER BY created_at DESC LIMIT 1;\" 2>/dev/null || echo 'UNKNOWN'"`;

      const { stdout } = await execAsync(cmd, { timeout: 30000 });

      // Parse deployment status from output
      let status: DeploymentStatus["status"] = "unknown";
      if (stdout.includes("success") || stdout.includes("completed")) {
        status = "success";
      } else if (stdout.includes("failed") || stdout.includes("error")) {
        status = "failed";
      } else if (stdout.includes("running") || stdout.includes("in progress")) {
        status = "in_progress";
      }

      return {
        id: deploymentId,
        status,
        logs: stdout,
      };
    } catch (error) {
      console.error("Failed to get deployment status:", error);
      return {
        id: deploymentId,
        status: "unknown",
      };
    }
  }

  /**
   * List recent deployments
   */
  async listDeployments(
    limit: number = 10
  ): Promise<Array<{ id: string; status: string; createdAt: string }>> {
    try {
      const keyFile = this.createKeyFile();

      // Query Coolify database for recent deployments
      const cmd = `ssh -i "${keyFile}" -o StrictHostKeyChecking=no ${this.config.user}@${this.config.host} "docker exec coolify_database_1 psql -U postgres -d coolify -c \"SELECT deployment_id, status, created_at FROM deployment_logs ORDER BY created_at DESC LIMIT ${limit};\" 2>/dev/null || echo 'UNKNOWN'"`;

      const { stdout } = await execAsync(cmd, { timeout: 30000 });
      return [];
    } catch (error) {
      console.error("Failed to list deployments:", error);
      return [];
    }
  }

  /**
   * Get raw SSH command output
   * Useful for custom queries
   */
  async executeCommand(
    command: string,
    timeout: number = 30000
  ): Promise<string> {
    try {
      const keyFile = this.createKeyFile();
      const sshCmd = `ssh -i "${keyFile}" -o StrictHostKeyChecking=no ${this.config.user}@${this.config.host} "${command}"`;

      const { stdout } = await execAsync(sshCmd, { timeout });
      return stdout;
    } catch (error) {
      throw new Error(
        `SSH command failed: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
}

/**
 * Create and return a singleton Coolify SSH client
 */
let coolifyClient: CoolifySSHClient | null = null;

export function getCoolifySSHClient(
  config?: CoolifySSHConfig
): CoolifySSHClient {
  if (!coolifyClient) {
    coolifyClient = new CoolifySSHClient(config);
  }
  return coolifyClient;
}

/**
 * Clean up the singleton client
 */
export function cleanupCoolifySSHClient(): void {
  if (coolifyClient) {
    coolifyClient.cleanup();
    coolifyClient = null;
  }
}
