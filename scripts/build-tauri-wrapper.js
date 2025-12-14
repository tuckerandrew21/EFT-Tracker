#!/usr/bin/env node
/**
 * Wrapper script for Tauri builds that handles API directory exclusion
 *
 * Next.js static export doesn't support API routes, but the Tauri app
 * calls the production API at https://learntotarkov.com anyway, so we
 * temporarily move the API directory during build then restore it.
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const apiDir = path.join(__dirname, "../src/app/api");
const apiBackupDir = path.join(__dirname, "../src/app/_api_backup");

function main() {
  console.log("\n📦 Starting Tauri build process...\n");

  let apiMoved = false;

  try {
    // Check if API directory exists and try to move it
    if (fs.existsSync(apiDir)) {
      console.log("🔄 Moving API directory out of build path...");

      // Remove backup if it exists from a previous failed build
      if (fs.existsSync(apiBackupDir)) {
        console.log("   Cleaning up previous backup...");
        fs.rmSync(apiBackupDir, { recursive: true, force: true });
      }

      try {
        fs.renameSync(apiDir, apiBackupDir);
        apiMoved = true;
        console.log("✅ API directory moved\n");
      } catch (error) {
        if (error.code === "EPERM" || error.code === "EBUSY") {
          console.log(
            "⚠️  Could not move API directory (file in use by IDE/editor)"
          );
          console.log("⚠️  Proceeding with build - may encounter errors\n");
        } else {
          throw error;
        }
      }
    }

    // Run the Next.js build
    console.log("🏗️  Building Next.js static export...\n");
    execSync("npm run build:tauri:nextjs", { stdio: "inherit" });
    console.log("\n✅ Build completed successfully!\n");
  } catch (error) {
    console.error("\n❌ Build failed:", error.message);
    process.exitCode = 1;
  } finally {
    // Always try to restore the API directory
    if (apiMoved && fs.existsSync(apiBackupDir)) {
      console.log("🔄 Restoring API directory...");
      try {
        // Remove the original if it somehow exists
        if (fs.existsSync(apiDir)) {
          fs.rmSync(apiDir, { recursive: true, force: true });
        }
        fs.renameSync(apiBackupDir, apiDir);
        console.log("✅ API directory restored\n");
      } catch (error) {
        console.error("⚠️  Could not restore API directory:", error.message);
        console.error(
          "   Please manually rename src/app/_api_backup to src/app/api\n"
        );
        process.exitCode = 1;
      }
    }
  }
}

main();
