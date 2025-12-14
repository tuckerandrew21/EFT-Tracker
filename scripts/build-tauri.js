#!/usr/bin/env node
/**
 * Build script for Tauri that temporarily moves the API directory
 * since static exports don't support API routes
 */

const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const apiDir = path.join(__dirname, "../src/app/api");
const apiBackupDir = path.join(__dirname, "../src/app/_api_backup");

async function main() {
  console.log("📦 Preparing Tauri build...");

  // Check if API directory exists
  if (!fs.existsSync(apiDir)) {
    console.log("⚠️  API directory not found, proceeding with build");
    return runBuild();
  }

  console.log("🔄 Temporarily moving API directory...");

  try {
    // Move API directory
    fs.renameSync(apiDir, apiBackupDir);
    console.log("✅ API directory moved");

    // Run the build
    await runBuild();
  } finally {
    // Always restore the API directory
    if (fs.existsSync(apiBackupDir)) {
      console.log("🔄 Restoring API directory...");
      fs.renameSync(apiBackupDir, apiDir);
      console.log("✅ API directory restored");
    }
  }
}

function runBuild() {
  return new Promise((resolve, reject) => {
    console.log("🏗️  Running Next.js build...");
    const build = exec("npm run build:tauri", (error, stdout, stderr) => {
      if (error) {
        console.error("❌ Build failed:", error.message);
        reject(error);
        return;
      }
      if (stderr) {
        console.error("Build stderr:", stderr);
      }
      console.log(stdout);
      console.log("✅ Build completed successfully");
      resolve();
    });

    // Stream output in real-time
    build.stdout.on("data", (data) => process.stdout.write(data));
    build.stderr.on("data", (data) => process.stderr.write(data));
  });
}

main().catch((error) => {
  console.error("❌ Build script failed:", error);
  process.exit(1);
});
