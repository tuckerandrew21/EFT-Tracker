/**
 * Coolify HTTP API Client
 * Provides programmatic access to Coolify deployment monitoring via HTTP REST API
 *
 * Requires environment variables:
 * - COOLIFY_API_URL: Base URL of Coolify API (e.g., http://95.217.155.28:8000/api/v1)
 * - COOLIFY_API_TOKEN: Bearer token for authentication
 */

export interface CoolifyDeployment {
  id: number;
  deployment_uuid: string;
  application_id: number;
  application_name: string;
  status: 'queued' | 'in_progress' | 'finished' | 'failed' | 'cancelled';
  commit: string;
  commit_message: string;
  logs: string;
  created_at: string;
  updated_at: string;
  deployment_url: string;
  server_name: string;
}

export interface CoolifyConfig {
  apiUrl: string;
  apiToken: string;
}

export class CoolifyAPIClient {
  private config: CoolifyConfig;

  constructor(config?: CoolifyConfig) {
    this.config = config || this.loadFromEnv();
  }

  /**
   * Load Coolify API configuration from environment variables
   */
  private loadFromEnv(): CoolifyConfig {
    const apiUrl = process.env.COOLIFY_API_URL;
    const apiToken = process.env.COOLIFY_API_TOKEN;

    if (!apiUrl || !apiToken) {
      throw new Error(
        'Missing Coolify API configuration. Set COOLIFY_API_URL and COOLIFY_API_TOKEN environment variables.'
      );
    }

    return { apiUrl, apiToken };
  }

  /**
   * Make an HTTP request to Coolify API with proper authentication
   */
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.config.apiUrl}${endpoint}`;

    const response = await fetch(url, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.config.apiToken}`,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Coolify API error: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  }

  /**
   * Test connection to Coolify API
   */
  async testConnection(): Promise<boolean> {
    try {
      // Try to fetch API version as a simple connectivity test
      const response = await fetch(`${this.config.apiUrl}/version`, {
        headers: {
          'Authorization': `Bearer ${this.config.apiToken}`,
        },
      });
      return response.ok;
    } catch (error) {
      console.error('Coolify API connection test failed:', error);
      return false;
    }
  }

  /**
   * List all deployments
   */
  async listDeployments(): Promise<CoolifyDeployment[]> {
    return this.request<CoolifyDeployment[]>('/deployments');
  }

  /**
   * Get a specific deployment by UUID
   */
  async getDeployment(uuid: string): Promise<CoolifyDeployment> {
    return this.request<CoolifyDeployment>(`/deployments/${uuid}`);
  }

  /**
   * Get application logs
   */
  async getApplicationLogs(applicationUuid: string): Promise<string> {
    const response = await this.request<{ logs: string }>(
      `/applications/${applicationUuid}/logs`
    );
    return response.logs;
  }
}

/**
 * Singleton instance of Coolify API client
 */
let coolifyClient: CoolifyAPIClient | null = null;

/**
 * Get or create singleton instance of Coolify API client
 */
export function getCoolifyAPIClient(config?: CoolifyConfig): CoolifyAPIClient {
  if (!coolifyClient) {
    coolifyClient = new CoolifyAPIClient(config);
  }
  return coolifyClient;
}

/**
 * Reset singleton instance (useful for testing)
 */
export function resetCoolifyAPIClient(): void {
  coolifyClient = null;
}
