# Coolify Deployment Monitoring

This document describes how to set up and use Coolify HTTP API for deployment monitoring. The HTTP API is the recommended approach as it's more reliable and doesn't require SSH key management.

## Setup

### 1. Generate API Token

In Coolify UI:
1. Navigate to **Keys & Tokens**
2. Click **Create New Token**
3. Enter name: `EFT-Tracker-Deployment-Monitor`
4. Select permissions: `read-only` (sufficient for monitoring)
5. Click **Create**
6. **Copy token immediately** (shown only once)

### 2. Configure Environment Variables

Add the following to `.env.local` (NOT `.env` - this file is not committed):

```bash
# Coolify HTTP API (Recommended)
COOLIFY_API_URL=http://95.217.155.28:8000/api/v1
COOLIFY_API_TOKEN=<paste-token-here>
```

### 3. Verify Configuration

Test the connection by running the development server and calling:

```bash
curl "http://localhost:3000/api/deployment/status?deploymentId=<deployment-uuid>"
```

You should receive a JSON response with deployment status.

## Usage

### API Routes

The application provides two HTTP API endpoints for deployment monitoring:

#### Get Deployment Status

```bash
GET /api/deployment/status?deploymentId=<deployment-uuid>
```

Response:
```json
{
  "deploymentId": "ogo0gkc8488sccwgocwkc8gw",
  "status": "finished",
  "applicationName": "EFT-Tracker",
  "commit": "abc123def456",
  "commitMessage": "feat: Add new feature",
  "deploymentUrl": "https://learntotarkov.com",
  "createdAt": "2025-12-16T11:00:00.000Z",
  "updatedAt": "2025-12-16T11:05:00.000Z",
  "timestamp": "2025-12-16T11:05:30.000Z"
}
```

**Deployment Status Values:**

- `queued` - Waiting to start
- `in_progress` - Currently building/deploying
- `finished` - Successfully completed
- `failed` - Deployment failed
- `cancelled` - Deployment was cancelled

#### Get Deployment Logs

```bash
GET /api/deployment/logs?deploymentId=<deployment-uuid>
```

Response:
```json
{
  "deploymentId": "ogo0gkc8488sccwgocwkc8gw",
  "status": "finished",
  "logs": "Building application...\nInstalling dependencies...\n...",
  "commit": "abc123def456",
  "commitMessage": "feat: Add new feature",
  "applicationName": "EFT-Tracker",
  "timestamp": "2025-12-16T11:05:30.000Z"
}
```

### TypeScript Client

Use the Coolify API client in your application:

```typescript
import { getCoolifyAPIClient } from '@eft-tracker/utils';

const client = getCoolifyAPIClient();

// Test connection
const connected = await client.testConnection();
console.log('Connected:', connected);

// Get deployment status
const deployment = await client.getDeployment('ogo0gkc8488sccwgocwkc8gw');
console.log('Status:', deployment.status);
console.log('Logs:', deployment.logs);

// List all deployments
const deployments = await client.listDeployments();
console.log('Recent deployments:', deployments.length);
```

### Alternative: SSH Access (Deprecated)

**Note:** SSH access is deprecated in favor of the HTTP API. Use HTTP API for all new code.

If you need SSH access as a fallback:

1. Generate SSH Key in Coolify UI → Keys & Tokens → SSH Key (ED25519, no passphrase)
2. Add to `.env.local`:

   ```bash
   COOLIFY_SSH_HOST=95.217.155.28
   COOLIFY_SSH_USER=root
   COOLIFY_SSH_KEY="-----BEGIN OPENSSH PRIVATE KEY-----
   ...
   -----END OPENSSH PRIVATE KEY-----"
   ```

3. Add public key to server:

   ```bash
   ssh root@95.217.155.28
   echo "ssh-ed25519 AAAAC..." >> ~/.ssh/authorized_keys
   chmod 600 ~/.ssh/authorized_keys
   ```
4. Test with: `./scripts/tools/coolify-ssh.sh test`

## Troubleshooting

### API Connection Failed

**Error:** `Failed to connect to Coolify API. Check API token and URL.`

**Solutions:**

1. Verify `COOLIFY_API_URL` is correct: `http://95.217.155.28:8000/api/v1`
2. Check `COOLIFY_API_TOKEN` is set in `.env.local`
3. Verify token permissions allow API access
4. Test token with curl:

   ```bash
   curl -H "Authorization: Bearer <token>" \
     "http://95.217.155.28:8000/api/v1/version"
   ```

### Deployment Not Found

**Error:** `Failed to fetch deployment status` or `404 Not Found`

**Solutions:**

1. Verify deployment UUID is correct (not deployment ID)
2. Confirm deployment exists in Coolify UI
3. Check that the token has read permissions
4. Ensure deployment is on the same Coolify instance

### Invalid API Token

**Error:** `401 Unauthorized`

**Solutions:**

1. Regenerate token in Coolify UI (old token may have expired)
2. Copy new token to `.env.local`
3. Restart development server
4. Verify token wasn't accidentally modified

## Security Notes

### API Token Management

- **Storage:** Keep token in `.env.local` (never commit to git)
- **Permissions:** Use `read-only` level for monitoring
- **Rotation:** Regenerate tokens periodically (monthly recommended)
- **Scope:** Create separate tokens for different environments (dev, staging, production)
- **Access:** Never expose token in client-side code or logs

### Log Sensitivity

- **Warning:** Coolify deployment logs may contain environment variables and secrets
- **Risk:** Anyone with API access can potentially see sensitive values
- **Mitigation:** Don't display raw logs in public-facing UIs
- **Best Practice:** Sanitize logs before showing to users

### Environment Variables in Production

1. Store `COOLIFY_API_TOKEN` in your deployment platform's secret management
2. Example platforms:
   - Coolify itself (built-in secrets)
   - GitHub Actions (repository secrets)
   - Docker Swarm (secrets)
   - Kubernetes (secrets)
3. Never hardcode tokens in production

## Architecture

```
┌─────────────────────────────┐
│  Application/CLI            │
└──────────────┬──────────────┘
               │
        ┌──────▼──────────────────┐
        │  Coolify API Client     │
        │  (coolify-api.ts)       │
        │  - testConnection()     │
        │  - getDeployment()      │
        │  - listDeployments()    │
        └──────────┬──────────────┘
               │ HTTP
        ┌──────▼──────────────────┐
        │  Coolify Server         │
        │  95.217.155.28:8000     │
        │  /api/v1 endpoints      │
        └─────────────────────────┘
```

## API Reference

### Deployment Status Values

| Status | Meaning |
|--------|---------|
| `queued` | Waiting to start deployment |
| `in_progress` | Currently building/deploying |
| `finished` | Successfully completed |
| `failed` | Deployment encountered an error |
| `cancelled` | Deployment was manually cancelled |

### Response Fields

All API responses include:

- `deploymentId` - Deployment UUID
- `status` - Current deployment status
- `applicationName` - Name of the application
- `commit` - Git commit SHA
- `commitMessage` - Commit message text
- `deploymentUrl` - URL where application is deployed
- `createdAt` - When deployment started
- `updatedAt` - Last update time
- `timestamp` - When the API response was generated

### Error Responses

```json
{
  "error": "Error message describing what went wrong"
}
```

Common error codes:

- `400` - Missing or invalid query parameters
- `401` - Authentication failed (invalid token)
- `403` - Token lacks required permissions
- `404` - Deployment not found
- `503` - Coolify API unavailable
- `500` - Internal server error

## Files

- **API Client:** `packages/utils/src/coolify-api.ts`
- **API Routes:**
  - `apps/web/src/app/api/deployment/logs/route.ts`
  - `apps/web/src/app/api/deployment/status/route.ts`
- **SSH Client (Deprecated):** `packages/utils/src/coolify-ssh.ts`
- **SSH Script (Deprecated):** `scripts/tools/coolify-ssh.sh`
- **Environment Template:** `.env.template`
