# Auto-Deployment from GitHub to Coolify

**Setup completed:** The repository is configured for automatic deployment to production when code is merged to `master`.

## How it works

1. Code is merged to `master` branch (via PR after CI checks pass)
2. GitHub sends a webhook to Coolify with HMAC-SHA256 signature
3. Coolify validates the webhook signature for security
4. Deployment is automatically queued and executed:
   - Clones repository at the specific commit SHA
   - Builds Docker image using multi-stage Dockerfile
   - Runs healthcheck on new container
   - Performs rolling update (zero downtime)
   - Removes old container after new one is healthy

## Webhook configuration

- **URL:** `http://95.217.155.28:8000/webhooks/source/github/events/manual`
- **Secret:** Stored in both GitHub webhook settings and Coolify configuration
- **Events:** Push events only (triggers on merge to master)
- **Content-Type:** application/json

## Deployment timing

- Docker build: ~2 minutes
- Healthcheck wait: ~30 seconds
- Total deployment time: ~3 minutes from merge to live

## Monitoring deployments

- View deployment logs in Coolify: `http://95.217.155.28:8000/`
- Navigate to: Projects → EFT-Tracker → Deployments
- Each deployment shows: commit SHA, trigger type (Webhook/Manual), status, logs

## Manual deployment

If needed, you can trigger a manual deployment from the Coolify dashboard using the "Redeploy" button.

## Production URL

`https://learntotarkov.com`

## Deployment Monitoring API

The application includes HTTP API endpoints for programmatic deployment monitoring.

### Quick Reference

```typescript
import { getCoolifyAPIClient } from "@eft-tracker/utils";

const client = getCoolifyAPIClient();

// Test connection
const connected = await client.testConnection();

// Get deployment status
const deployment = await client.getDeployment("deployment-uuid");
console.log(deployment.status); // 'queued' | 'in_progress' | 'finished' | 'failed' | 'cancelled'

// List all deployments
const deployments = await client.listDeployments();
```

### API Routes

- `GET /api/deployment/status?deploymentId=<uuid>` - Get deployment status
- `GET /api/deployment/logs?deploymentId=<uuid>` - Get deployment logs

### Environment Variables Required

- `COOLIFY_API_URL` - `http://95.217.155.28:8000/api/v1`
- `COOLIFY_API_TOKEN` - Bearer token (read-only recommended)

### Files

- Client: `packages/utils/src/coolify-api.ts`
- Routes: `apps/web/src/app/api/deployment/{logs,status}/route.ts`
