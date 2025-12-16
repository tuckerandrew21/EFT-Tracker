import { NextRequest, NextResponse } from 'next/server';
import { getCoolifyAPIClient } from '@eft-tracker/utils';

/**
 * GET /api/deployment/logs
 * Query parameters:
 *   - deploymentId: The Coolify deployment UUID to get logs for
 *
 * Returns deployment logs via Coolify HTTP API
 * Requires COOLIFY_API_URL and COOLIFY_API_TOKEN environment variables
 */
export async function GET(request: NextRequest) {
  const deploymentUuid = request.nextUrl.searchParams.get('deploymentId');

  if (!deploymentUuid) {
    return NextResponse.json(
      { error: 'deploymentId query parameter is required' },
      { status: 400 }
    );
  }

  try {
    // Check if Coolify API credentials are configured
    if (!process.env.COOLIFY_API_URL || !process.env.COOLIFY_API_TOKEN) {
      return NextResponse.json(
        { error: 'Coolify API credentials not configured' },
        { status: 503 }
      );
    }

    const client = getCoolifyAPIClient();

    // Test connection first
    const connected = await client.testConnection();
    if (!connected) {
      return NextResponse.json(
        { error: 'Failed to connect to Coolify API. Check API token and URL.' },
        { status: 503 }
      );
    }

    // Get deployment details (includes logs)
    const deployment = await client.getDeployment(deploymentUuid);

    return NextResponse.json({
      deploymentId: deployment.deployment_uuid,
      status: deployment.status,
      logs: deployment.logs,
      commit: deployment.commit,
      commitMessage: deployment.commit_message,
      applicationName: deployment.application_name,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Failed to fetch deployment logs:', error);
    return NextResponse.json(
      { error: `Failed to fetch deployment logs: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}
