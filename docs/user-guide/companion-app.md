# Companion App Setup Guide

The EFT Quest Tracker Companion App automatically tracks your quest progress by monitoring your game logs - no manual updates needed!

## Status: Released! 🎉

The Windows companion app is now available for download. It provides automatic quest tracking by watching your EFT log files and syncing progress to the cloud.

**Download:** [GitHub Releases](https://github.com/andrew-tucker-razorvision/EFT-Tracker/releases/latest)
**Architecture:** Thin client that connects to learntotarkov.com API
**Platform:** Windows 10/11 (64-bit)
**Authentication:** Token-based (secure companion tokens)

---

## Quick Start

### 1. Download and Install

1. Go to [GitHub Releases](https://github.com/andrew-tucker-razorvision/EFT-Tracker/releases/latest)
2. Download `EFT Tracker Companion_x.x.x_x64-setup.exe`
3. Run the installer (Windows SmartScreen may show a warning - click "More info" → "Run anyway")
4. The app will start automatically after installation

### 2. Link Your Account

The companion app uses **secure companion tokens** for authentication (not your password).

1. **On the web:**
   - Go to [https://learntotarkov.com/settings](https://learntotarkov.com/settings)
   - Sign in to your account
   - Click on the **"Companion App"** tab
   - Click **"Generate New Token"**
   - Enter a device name (e.g., "Gaming PC")
   - Copy the token that appears (it will only be shown once!)

2. **In the companion app:**
   - Click **"Link Account"** button
   - Paste your token into the input field
   - Click **"Validate"**
   - Once validated, click **"Link This Account"**

### 3. Start Tracking

1. Make sure EFT is installed and the app detected it (shown in "EFT Installation" section)
2. If not detected, click "Settings" → "EFT Installation" and browse to your game folder
3. Click **"Start Watching"** to begin monitoring your game logs
4. Play Tarkov! Quest progress will sync automatically when you:
   - Start a quest
   - Complete a quest
   - Fail a quest

---

## Features

### Automatic Quest Tracking

- **Real-time log monitoring** - Watches EFT log files for quest events
- **Instant sync** - Progress syncs to the cloud within seconds
- **Offline support** - Events are queued when offline and synced when connection returns
- **No manual updates** - Set it and forget it!

### System Tray Integration

- **Minimize to tray** - App stays running in the background
- **Quick access** - Right-click tray icon for menu
- **Auto-start** - Optional startup with Windows (enable in Settings)

### Quest Statistics

- **Live progress** - See completed/in-progress/available quest counts
- **Recent events** - View last 50 quest events
- **Sync status** - Monitor pending events and sync errors

### Auto-Updates

- **GitHub Releases** - Automatic update checking
- **One-click install** - Download and install updates from within the app
- **Release notes** - See what's new before updating

---

## Authentication & Security

### Why Companion Tokens?

The companion app uses **Bearer token authentication** instead of cookies because:

- Session cookies don't work across origins (`tauri://` → `https://`)
- Tokens are more secure for desktop apps
- You can revoke individual devices without changing your password
- Tokens have no access to sensitive account operations

### Token Security

- Tokens are hashed with bcrypt before storage
- Rate-limited generation (5 tokens per hour max)
- Maximum 5 active devices per account
- Last used timestamp tracked for each device
- Can be revoked instantly from settings

### Managing Your Tokens

**View active tokens:**

1. Go to [Settings → Companion App](https://learntotarkov.com/settings)
2. See all linked devices with last used time

**Revoke a token:**

1. Click **"Revoke"** next to the device
2. The companion app on that device will lose access immediately
3. You'll need to generate a new token to relink

---

## System Requirements

### Minimum Requirements

- **OS:** Windows 10 (1809) or Windows 11 (64-bit)
- **RAM:** 100 MB additional
- **Storage:** 50 MB
- **Internet:** Required for initial setup and syncing
- **WebView2:** Usually pre-installed on Windows 10/11

### EFT Installation

- The app must be able to access your EFT `Logs/` directory
- Auto-detection works for standard installations
- Manual path configuration available in Settings

---

## Troubleshooting

### App Won't Start

**Windows SmartScreen Warning:**

- Click "More info" → "Run anyway"
- This happens because the app is not code-signed (costs $300/year)

**Missing WebView2:**

1. Download from [Microsoft](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)
2. Install the "Evergreen Bootstrapper"
3. Restart the companion app

### Token Validation Fails

**"Invalid or expired token":**

- Token was revoked from web settings
- Generate a new token and relink

**"Network error":**

- Check internet connection
- Verify learntotarkov.com is accessible
- Check firewall isn't blocking the app

### EFT Installation Not Found

**Auto-detection failed:**

1. Click Settings → EFT Installation
2. Click "Browse" and navigate to your EFT folder
3. Select the folder containing `EscapeFromTarkov.exe`
4. Click "Save"

**Common locations:**

- `C:\Battlestate Games\BsgLauncher\EscapeFromTarkov`
- `C:\Program Files\Battlestate Games\EscapeFromTarkov`
- Custom install location (you'll need to remember this!)

### Events Not Syncing

**Check sync status:**

- Look at "Pending" count in Sync section
- If >0, events are queued but not synced

**Possible causes:**

- No internet connection (events will sync when back online)
- Token revoked (generate new token)
- Rate limit hit (wait 1 minute)

**Manual sync:**

- Click **"Sync Now"** button to force immediate sync

### High Pending Count

If you have many pending events:

1. Check internet connection
2. Click "Sync Now" to force sync
3. If still failing, check token is valid
4. Last resort: restart the app (events are persisted)

---

## Settings

### Notification Sound

- **Enable/Disable:** Toggle sound when quest events are detected
- **Default:** Enabled

### Auto-Watch

- **Enable/Disable:** Automatically start watching logs on app launch
- **Default:** Disabled
- **Recommended:** Enable after testing works correctly

### EFT Path

- **Auto-detect:** App tries to find EFT installation automatically
- **Manual:** Click "Browse" to set custom path
- **Validation:** App checks for valid `Logs/` directory

---

## Privacy & Data

### What Data is Collected?

**Synced to cloud:**

- Quest events (quest ID, status, timestamp)
- Device name (you choose this)
- Last sync time

**NOT collected:**

- Game memory or other logs
- Personal files
- Keyboard input
- Screen captures

### Where is Data Stored?

- **Local:** Settings and event queue in app data folder
- **Cloud:** Quest progress on learntotarkov.com servers
- **No third parties:** No analytics or tracking services

---

## Uninstalling

### Windows

1. **Settings → Apps → Apps & features**
2. Find "EFT Tracker Companion"
3. Click "Uninstall"

### Clean Uninstall

To remove all data:

1. Uninstall the app (above)
2. Delete app data: `%APPDATA%\com.eft-tracker.app`
3. Revoke token from [web settings](https://learntotarkov.com/settings)

---

## Alternative: Use Web Tracker

If the companion app doesn't work for you, the web tracker remains fully functional:

### Second Monitor Setup

1. Open [https://learntotarkov.com/quests](https://learntotarkov.com/quests)
2. Drag to second monitor
3. Use keyboard shortcuts for quick updates

### Mobile/Tablet Setup

1. Open on phone/tablet
2. Log in with same account
3. Manual progress tracking during raids

---

## Technical Details

### Architecture

- **Frontend:** React + TypeScript (Vite)
- **Backend:** Rust (Tauri)
- **API:** Production server at learntotarkov.com
- **Auth:** Bearer token (JWT-like, bcrypt hashed)
- **Updates:** GitHub Releases with auto-updater

### Log Monitoring

- Watches `Logs/application.log` for quest events
- Parses log lines for specific quest patterns
- Extracts quest ID and status (STARTED, FINISHED, FAILED)
- Queues events locally before syncing

### Sync Strategy

- **Auto-sync:** 5 seconds after events detected
- **Batching:** Multiple rapid events batched together
- **Retry:** Failed syncs stay in queue
- **Manual:** "Sync Now" button forces immediate sync

---

## Frequently Asked Questions

### Is this safe to use?

**Yes.** The companion app:

- Does NOT modify game files
- Does NOT inject into game memory
- Does NOT automate gameplay
- Does NOT read game memory
- Only reads public log files that EFT writes

It's equivalent to manually checking logs - just automated.

### Will this get me banned?

**No.** Similar to:

- OBS overlays
- Discord overlay
- Having a second monitor
- Using your phone for quest notes

It's an external tool that doesn't interact with the game process.

### How much does it cost?

**Free.** Forever. No ads, no premium tier, no strings attached.

### Do I need to keep it running?

**For automatic tracking, yes.** The app needs to be running to watch log files. You can minimize to system tray.

**Alternative:** Close it and manually track on the web instead.

### Can I use multiple devices?

**Yes!** Generate a token for each device (max 5 devices per account). All devices sync to the same account.

### What if I reinstall Windows?

1. Uninstall app (optional - gets wiped anyway)
2. Revoke old token from [web settings](https://learntotarkov.com/settings)
3. After reinstall, download and install fresh
4. Generate new token and link

### Does it work with PVE mode?

**Yes!** The app works with both PVP and PVE modes. Select your game mode when generating the companion token.

---

## Need Help?

- [Getting Started Guide](getting-started.md) - Web tracker setup
- [Quest Tracking Tutorial](quest-tracking.md) - Master the features
- [Troubleshooting](troubleshooting.md) - Fix common issues
- [FAQ](faq.md) - General questions
- [GitHub Issues](https://github.com/andrew-tucker-razorvision/EFT-Tracker/issues) - Report bugs

---

**Enjoy automatic quest tracking!** 🎮
