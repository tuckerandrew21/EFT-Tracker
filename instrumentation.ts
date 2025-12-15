/**
 * Next.js Instrumentation File
 *
 * This file is automatically loaded by Next.js to register instrumentation.
 * It's used to initialize Sentry for both Node.js and Edge runtimes.
 *
 * See: https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation
 */

export async function register() {
  // Only load Sentry if DSN is configured
  const sentryDsn =
    process.env.NEXT_RUNTIME === "nodejs"
      ? process.env.SENTRY_DSN
      : process.env.NEXT_PUBLIC_SENTRY_DSN;

  if (!sentryDsn) {
    return; // Skip Sentry initialization if no DSN
  }

  // Load Sentry configuration based on runtime
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}
