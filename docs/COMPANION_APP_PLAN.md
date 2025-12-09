# EFT-Tracker Desktop Companion App - Implementation Plan

## Executive Summary

This document outlines the plan for building a desktop companion application that automatically tracks quest completions from Escape from Tarkov log files and syncs them to the EFT-Tracker web application. The companion app will run in the background while playing Tarkov and detect quest events in real-time.

## Table of Contents

1. [Research Findings](#research-findings)
2. [Architecture Decision](#architecture-decision)
3. [System Architecture](#system-architecture)
4. [Implementation Phases](#implementation-phases)
5. [Technical Specifications](#technical-specifications)
6. [API Design](#api-design)
7. [Security Considerations](#security-considerations)
8. [Testing Strategy](#testing-strategy)
9. [Deployment & Distribution](#deployment--distribution)
10. [Timeline Estimate](#timeline-estimate)

---

## Research Findings

### How EFT Log Parsing Works (from TarkovMonitor analysis)

**Log File Location:**

- Found via Windows Registry: `SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\EscapeFromTarkov`
- The `InstallLocation` value + `/Logs` directory
- Alternatively: Steam installation path

**Quest Event Detection:**

- Quest events appear in logs as: `"Got notification | ChatMessageReceived"`
- The notification contains a JSON payload with quest information
- Quest ID is extracted from `message.templateId`

**Quest Status Types (from logs):**

```
TaskStarted  - Quest accepted
TaskFailed   - Quest failed
TaskFinished - Quest completed
```

**File Watching Strategy:**

- Poll-based approach (5-second intervals)
- Use `FileStream` with `FileShare.ReadWrite` for concurrent access (game is writing)
- Track file position (`fileBytesRead`) to only read new data
- Read in 1024-byte chunks
- UTF-8 encoding

### Quest ID Mapping

TarkovMonitor uses `tarkov.dev` GraphQL API to get quest metadata:

```graphql
query TarkovMonitorTasks($language: LanguageCode, $gm: GameMode) {
  tasks(lang: $language, gameMode: $gm) {
    id
    name
    normalizedName
    wikiLink
  }
}
```

**Important:** The `id` field from tarkov.dev matches the `templateId` in EFT logs.

**Good News:** Our EFT-Tracker database already uses tarkov.dev as the data source (via our seed script), so quest IDs will match directly!

### Tauri vs Electron Decision

Based on comprehensive research, **Tauri is recommended** for this use case because:

| Factor        | Tauri                  | Electron              |
| ------------- | ---------------------- | --------------------- |
| Bundle Size   | 2.5-10 MB              | 80-120 MB             |
| Memory Usage  | 30-50 MB idle          | 200-400 MB idle       |
| System Tray   | Native support         | Mature support        |
| Auto-Update   | Built-in plugin        | electron-builder      |
| File Watching | Native Rust            | Node.js (chokidar)    |
| Security      | Smaller attack surface | Larger attack surface |

**Recommendation: Tauri**

- Background apps benefit most from efficiency
- Minimal UI requirements
- File watching + HTTP are straightforward in Rust
- Tauri v2.0 is production-ready (stable Oct 2024)
- Better user experience (faster startup, less resource usage)

---

## Architecture Decision

### Chosen Stack

**Desktop App (Tauri v2):**

- Frontend: TypeScript + React (reuse EFT-Tracker UI patterns)
- Backend: Rust (file watching, HTTP, background processing)
- UI Framework: Tailwind CSS (consistency with web app)

**Web App Extensions (EFT-Tracker):**

- New API endpoints for companion app sync
- Database additions for sync tokens
- Real-time update notifications (optional WebSocket)

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     User's Computer                              │
│                                                                  │
│  ┌──────────────┐          ┌────────────────────────────────┐  │
│  │   Tarkov     │ writes   │     EFT-Tracker Companion      │  │
│  │   Game       │ ───────> │     (Tauri App)                │  │
│  └──────────────┘  logs    │                                │  │
│                            │  ┌──────────────────────────┐  │  │
│                            │  │ Rust Backend             │  │  │
│                            │  │ - Log file watcher       │  │  │
│                            │  │ - Quest event parser     │  │  │
│                            │  │ - HTTP client            │  │  │
│                            │  │ - Offline queue          │  │  │
│                            │  └──────────────────────────┘  │  │
│                            │              │                  │  │
│                            │  ┌──────────────────────────┐  │  │
│                            │  │ React Frontend           │  │  │
│                            │  │ - System tray UI         │  │  │
│                            │  │ - Settings panel         │  │  │
│                            │  │ - Status display         │  │  │
│                            │  └──────────────────────────┘  │  │
│                            └────────────────────────────────┘  │
│                                          │                      │
└──────────────────────────────────────────│──────────────────────┘
                                           │ HTTPS
                                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                     EFT-Tracker Web Server                       │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ New API Endpoints                                           │ │
│  │                                                             │ │
│  │ POST /api/companion/link     - Generate sync token          │ │
│  │ POST /api/companion/sync     - Batch sync quest progress    │ │
│  │ GET  /api/companion/status   - Check connection status      │ │
│  │ POST /api/companion/unlink   - Revoke sync token            │ │
│  └────────────────────────────────────────────────────────────┘ │
│                              │                                   │
│                              ▼                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ Database (PostgreSQL)                                       │ │
│  │                                                             │ │
│  │ CompanionToken                                              │ │
│  │ - id, userId, token, deviceName, lastSeen, createdAt        │ │
│  │                                                             │ │
│  │ QuestProgress (existing)                                    │ │
│  │ - Updated via companion sync                                │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## Implementation Phases

### Phase 1: Web App API Extensions

**Goal:** Add backend support for companion app sync

1. **Database Schema Changes**
   - Add `CompanionToken` model for device linking
   - Add `syncSource` field to track where updates came from

2. **New API Endpoints**
   - `POST /api/companion/link` - Generate sync token (requires auth)
   - `POST /api/companion/sync` - Batch sync quest completions
   - `GET /api/companion/status` - Health check / token validation
   - `POST /api/companion/unlink` - Revoke a sync token

3. **Security**
   - Rate limiting on sync endpoint
   - Token validation middleware
   - Audit logging for companion syncs

### Phase 2: Tauri App Foundation

**Goal:** Create the desktop app skeleton

1. **Project Setup**
   - Initialize Tauri v2 project with React/TypeScript
   - Configure build for Windows
   - Set up development workflow

2. **System Tray**
   - Tray icon with context menu
   - Status indicator (connected/disconnected/syncing)
   - Quick actions (open settings, sync now, quit)

3. **Settings UI**
   - Account linking flow
   - EFT installation path configuration
   - Auto-start on Windows boot
   - Notification preferences

### Phase 3: Log File Watching

**Goal:** Detect and parse EFT log events

1. **Log Location Detection**
   - Windows Registry lookup
   - Steam path fallback
   - Manual path configuration

2. **File Watcher Implementation**
   - Poll-based watching (5-second intervals)
   - Handle file rotation (new log files per session)
   - Concurrent read access (game is writing)

3. **Event Parsing**
   - Detect `ChatMessageReceived` notifications
   - Extract quest ID from `templateId`
   - Parse quest status (Started/Failed/Finished)

### Phase 4: Sync & Offline Support

**Goal:** Reliable data synchronization

1. **Real-time Sync**
   - Send quest updates as they occur
   - Debounce rapid updates (500ms)
   - Handle API errors gracefully

2. **Offline Queue**
   - Store pending updates in SQLite/file
   - Retry on reconnection
   - Conflict resolution (server wins)

3. **Status Display**
   - Show pending/synced counts
   - Display last sync time
   - Connection status indicator

### Phase 5: Polish & Distribution

**Goal:** Production-ready release

1. **Auto-Update**
   - Configure Tauri updater plugin
   - GitHub Releases integration
   - Silent background updates

2. **Installer**
   - NSIS installer for Windows
   - Optional auto-start registration
   - Uninstaller cleanup

3. **Error Handling**
   - Crash reporting (optional)
   - User-friendly error messages
   - Debug logging

---

## Technical Specifications

### Companion App Structure

```
eft-tracker-companion/
├── src/                    # React frontend
│   ├── components/
│   │   ├── TrayMenu.tsx
│   │   ├── Settings.tsx
│   │   ├── StatusDisplay.tsx
│   │   └── LinkAccount.tsx
│   ├── hooks/
│   │   └── useTauriCommands.ts
│   ├── App.tsx
│   └── main.tsx
├── src-tauri/              # Rust backend
│   ├── src/
│   │   ├── main.rs
│   │   ├── commands.rs     # Tauri commands exposed to frontend
│   │   ├── log_watcher.rs  # EFT log file monitoring
│   │   ├── parser.rs       # Log event parsing
│   │   ├── sync.rs         # API sync logic
│   │   ├── storage.rs      # Local storage/queue
│   │   └── config.rs       # Settings management
│   ├── Cargo.toml
│   └── tauri.conf.json
├── package.json
└── tsconfig.json
```

### Log Parsing Logic (Rust)

```rust
// Example quest event in logs:
// "Got notification | ChatMessageReceived | { ... JSON ... }"

struct QuestEvent {
    quest_id: String,
    status: QuestStatus,
    timestamp: DateTime<Utc>,
}

enum QuestStatus {
    Started,
    Failed,
    Finished,
}

fn parse_log_line(line: &str) -> Option<QuestEvent> {
    if !line.contains("Got notification | ChatMessageReceived") {
        return None;
    }

    // Extract JSON payload
    let json_start = line.find('{')?;
    let json_str = &line[json_start..];
    let notification: Notification = serde_json::from_str(json_str).ok()?;

    // Check if it's a quest notification
    if notification.message.template_id.starts_with("quest_") {
        return Some(QuestEvent {
            quest_id: notification.message.template_id.clone(),
            status: parse_status(&notification.message.type_),
            timestamp: Utc::now(),
        });
    }

    None
}
```

### File Watcher Logic (Rust)

```rust
use std::fs::File;
use std::io::{Read, Seek, SeekFrom};
use std::time::Duration;

struct LogWatcher {
    path: PathBuf,
    position: u64,
}

impl LogWatcher {
    fn poll(&mut self) -> Vec<String> {
        let mut file = File::open(&self.path)?;
        file.seek(SeekFrom::Start(self.position))?;

        let mut buffer = Vec::new();
        file.read_to_end(&mut buffer)?;
        self.position = file.metadata()?.len();

        let text = String::from_utf8_lossy(&buffer);
        text.lines().map(String::from).collect()
    }
}

// Poll every 5 seconds
async fn watch_loop(mut watcher: LogWatcher, tx: Sender<QuestEvent>) {
    loop {
        for line in watcher.poll() {
            if let Some(event) = parse_log_line(&line) {
                tx.send(event).await;
            }
        }
        tokio::time::sleep(Duration::from_secs(5)).await;
    }
}
```

---

## API Design

### New Endpoints for EFT-Tracker

#### POST /api/companion/link

Generate a sync token for the companion app.

**Request:**

```json
{
  "deviceName": "Gaming PC"
}
```

**Response:**

```json
{
  "token": "cmp_abc123...",
  "expiresAt": null // Tokens don't expire, but can be revoked
}
```

#### POST /api/companion/sync

Batch sync quest progress from companion app.

**Headers:**

```
Authorization: Bearer cmp_abc123...
```

**Request:**

```json
{
  "events": [
    {
      "questId": "5936d90786f7742b1420ba5b",
      "status": "COMPLETED",
      "timestamp": "2025-01-15T10:30:00Z"
    }
  ],
  "deviceInfo": {
    "version": "1.0.0",
    "os": "Windows 11"
  }
}
```

**Response:**

```json
{
  "synced": 1,
  "errors": [],
  "unlockedQuests": ["quest_id_1", "quest_id_2"]
}
```

#### GET /api/companion/status

Check connection status and token validity.

**Response:**

```json
{
  "valid": true,
  "userId": "user_123",
  "deviceName": "Gaming PC",
  "lastSeen": "2025-01-15T10:30:00Z"
}
```

#### POST /api/companion/unlink

Revoke a sync token.

**Request:**

```json
{
  "tokenId": "token_123"
}
```

### Database Schema Addition

```prisma
model CompanionToken {
  id          String   @id @default(cuid())
  token       String   @unique
  userId      String
  deviceName  String
  lastSeen    DateTime @default(now())
  createdAt   DateTime @default(now())
  revokedAt   DateTime?

  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([token])
}

// Add to User model:
// companionTokens CompanionToken[]
```

---

## Security Considerations

### Token Security

- Tokens are 32-character random strings prefixed with `cmp_`
- Tokens are hashed before storage (bcrypt)
- Tokens can be revoked from web UI
- Rate limiting: 60 requests/minute per token

### API Security

- All endpoints require valid companion token
- HTTPS only
- Request signing optional (future enhancement)
- IP logging for audit

### Desktop App Security

- No sensitive data stored in plaintext
- Token stored in OS keychain (via `tauri-plugin-keyring`)
- Auto-lock after extended inactivity
- Certificate pinning for API calls

### Privacy

- Only quest IDs and timestamps are sent
- No game account information transmitted
- Local logs can be disabled
- Users can view/delete sync history

---

## Testing Strategy

### Unit Tests

- Log line parsing
- Quest event extraction
- Status mapping
- Sync queue logic

### Integration Tests

- File watcher with mock log files
- API sync with test server
- Offline queue persistence
- Token refresh flow

### E2E Tests

- Full flow: Log event → Parse → Sync → Web update
- Account linking flow
- Settings persistence
- Auto-update flow

### Manual Testing

- Test with actual EFT game running
- Verify quest completion detection
- Check memory/CPU usage over time
- Test on various Windows versions

---

## Deployment & Distribution

### Build Pipeline (GitHub Actions)

1. Build Tauri app for Windows
2. Sign executable with code signing certificate
3. Create NSIS installer
4. Generate update manifest
5. Upload to GitHub Releases
6. Update download page

### Distribution Channels

1. **GitHub Releases** - Primary distribution
2. **Direct download** - From EFT-Tracker website
3. **Optional:** Windows Store (future)

### Update Strategy

- Background check on app start
- Prompt user to update
- Download and install silently
- Restart required for updates

---

## Timeline Estimate

This plan is broken into phases. Each phase should be completed and tested before moving to the next.

### Phase 1: Web API Extensions

- Database schema changes
- New API endpoints
- Token management UI
- Testing

### Phase 2: Tauri App Foundation

- Project setup
- System tray implementation
- Settings UI
- Account linking flow

### Phase 3: Log File Watching

- Log location detection
- File watcher implementation
- Event parsing
- Testing with mock logs

### Phase 4: Sync & Offline Support

- Real-time sync
- Offline queue
- Status display
- Error handling

### Phase 5: Polish & Distribution

- Auto-update
- Installer
- Documentation
- Release

---

## Design Decisions

1. **Game Mode Support**: Support both PVP and PVE modes
   - Primary focus on PVP (user's preference)
   - PVE integration included for other users
   - Log parsing handles both modes (separate progress tracking)

2. **Multi-Account Support**: Yes
   - App will be distributed to other users
   - Support linking multiple EFT-Tracker accounts
   - Easy account switching in settings

3. **Quest Status Tracking**: Track all three states
   - `TaskStarted` → IN_PROGRESS (show what user is currently working on)
   - `TaskFinished` → COMPLETED
   - `TaskFailed` → Reset to AVAILABLE (for restartable quests)
   - This gives full visibility: current quests, completions, and locked content

4. **Notification Sounds**: Yes, with option to disable
   - Play sound on quest completion
   - Settings toggle to disable sounds
   - Possibly different sounds for complete/fail

5. **Web UI Integration**: Yes
   - Show "synced via companion" indicator on quests
   - Display sync source in quest detail modal
   - Last sync timestamp visible in UI

---

## References

- [TarkovMonitor Source Code](https://github.com/the-hideout/TarkovMonitor)
- [Tauri v2 Documentation](https://v2.tauri.app/)
- [tarkov.dev GraphQL API](https://api.tarkov.dev/)
- [EFT-Tracker API Routes](src/app/api/)

---

## Appendix A: Log File Examples

### Quest Completed Notification

```
2025-01-15 10:30:45.123 | Got notification | ChatMessageReceived | {"type":4,"eventId":"...","message":{"templateId":"5936d90786f7742b1420ba5b","type":"TaskFinished",...}}
```

### Quest Started Notification

```
2025-01-15 10:25:00.456 | Got notification | ChatMessageReceived | {"type":4,"eventId":"...","message":{"templateId":"5936d90786f7742b1420ba5b","type":"TaskStarted",...}}
```

### Quest Failed Notification

```
2025-01-15 10:35:00.789 | Got notification | ChatMessageReceived | {"type":4,"eventId":"...","message":{"templateId":"5936d90786f7742b1420ba5b","type":"TaskFailed",...}}
```

---

## Appendix B: Quest ID Format

Quest IDs from tarkov.dev (and EFT logs) are MongoDB ObjectIds:

- 24 hexadecimal characters
- Example: `5936d90786f7742b1420ba5b`
- These match the `id` field in our Quest database table
