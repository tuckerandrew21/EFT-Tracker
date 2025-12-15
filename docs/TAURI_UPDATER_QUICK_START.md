# Tauri Auto-Updater Quick Start (Automated)

**Time Required:** ~15 minutes total (5 min per release + 5 min testing)

This guide uses automation scripts to handle most of the work. You only need to manually test installation.

---

## Automated Steps

### Step 1: Create Release v0.1.0

```bash
./scripts/release-tauri.sh 0.1.0
```

**What this does:**

- Updates version in 3 files (Cargo.toml, tauri.conf.json, package.json)
- Commits changes
- Creates and pushes `tauri-v0.1.0` tag
- Triggers GitHub Actions workflow

**Output:**

```
🚀 Creating Tauri release v0.1.0
📝 Updating version numbers...
💾 Committing changes...
🏷️  Creating tag tauri-v0.1.0...
✅ Release tag created!
📦 GitHub Actions is now building the release...
```

### Step 2: Wait for Build

```bash
./scripts/wait-for-build.sh
```

**What this does:**

- Monitors GitHub Actions workflow
- Shows real-time progress
- Exits when build completes

**Duration:** 5-10 minutes

### Step 3: Publish Release

```bash
./scripts/publish-release.sh 0.1.0
```

**What this does:**

- Publishes the draft release
- Makes it available on GitHub

**Output:**

```
✅ Release tauri-v0.1.0 published!
🔗 View at: https://github.com/.../releases/tag/tauri-v0.1.0
📥 Download installer:
gh release download tauri-v0.1.0 --pattern '*.msi'
```

---

## Manual Steps (5 minutes)

### Step 4: Download and Install

```bash
# Download the installer
gh release download tauri-v0.1.0 --pattern '*.msi'

# Install it
start EFT-Quest-Tracker_0.1.0_x64_en-US.msi
```

**Verify:**

- [ ] Installer runs without errors
- [ ] App launches
- [ ] System tray icon appears
- [ ] Close button hides to tray (doesn't quit)

### Step 5: Create Update Release

Make a small visible change first (optional):

```typescript
// src/components/header.tsx
<span className="text-xs">v0.1.1</span>
```

Then run the same automation:

```bash
./scripts/release-tauri.sh 0.1.1
./scripts/wait-for-build.sh
./scripts/publish-release.sh 0.1.1
```

### Step 6: Test Update

1. Launch the v0.1.0 app (already installed)
2. Update dialog should appear automatically
3. Click "OK" to install
4. Click "OK" to relaunch
5. Verify app shows v0.1.1 changes

**Expected console output:**

```
Checking for updates...
Update available: 0.1.1
Downloading and installing update...
```

---

## That's It!

**Automated:**

- Version number updates
- Git commits and tags
- GitHub release publishing
- Build monitoring

**Manual (unavoidable):**

- Installing .msi (Windows requirement)
- Clicking update prompts (user interaction)
- Visual verification (human judgment)

---

## Troubleshooting

### Script Permission Denied

```bash
chmod +x scripts/*.sh
```

### GitHub CLI Not Found

```bash
# Install GitHub CLI
winget install --id GitHub.cli
```

### Sed Not Found (Windows)

Use Git Bash or WSL to run scripts. Or manually update version numbers once and use automation for subsequent releases.

---

## Full Details

See [TAURI_UPDATER_TESTING_GUIDE.md](./TAURI_UPDATER_TESTING_GUIDE.md) for comprehensive guide with troubleshooting, security notes, and production checklist.
