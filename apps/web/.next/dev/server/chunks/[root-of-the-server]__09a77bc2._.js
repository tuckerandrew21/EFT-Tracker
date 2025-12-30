module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/pg [external] (pg, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("pg");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/apps/web/src/lib/env.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env",
    ()=>env
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.2.1/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
/**
 * Environment variable validation schema
 *
 * This validates all required environment variables at application startup.
 * If any variables are missing or invalid, the application will fail to start
 * with a clear error message.
 */ const envSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    // Node environment
    NODE_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "development",
        "production",
        "test"
    ]).default("development"),
    // Database
    DATABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url("DATABASE_URL must be a valid PostgreSQL connection string"),
    // Authentication
    AUTH_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(32, "AUTH_SECRET must be at least 32 characters. Generate with: openssl rand -base64 32"),
    NEXTAUTH_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url("NEXTAUTH_URL must be a valid URL (e.g., https://learntotarkov.com)"),
    // Optional: GitHub integration
    GITHUB_PERSONAL_ACCESS_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // Optional: Search features
    BRAVE_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // Optional: Rate Limiting (Upstash Redis)
    UPSTASH_REDIS_REST_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url("UPSTASH_REDIS_REST_URL must be a valid URL").optional(),
    UPSTASH_REDIS_REST_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // Optional: Logging
    LOG_LEVEL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "error",
        "warn",
        "info",
        "debug"
    ]).default("info").optional(),
    // Optional: Error Monitoring (Sentry)
    SENTRY_DSN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url("SENTRY_DSN must be a valid URL").optional(),
    NEXT_PUBLIC_SENTRY_DSN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url("NEXT_PUBLIC_SENTRY_DSN must be a valid URL").optional(),
    SENTRY_ORG: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    SENTRY_PROJECT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    SENTRY_AUTH_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const env = ("TURBOPACK compile-time value", "development") === "test" || process.env.SKIP_ENV_VALIDATION === "1" ? process.env : envSchema.parse(process.env);
}),
"[project]/apps/web/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getPrismaClient",
    ()=>getPrismaClient,
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$adapter$2d$pg$40$7$2e$1$2e$0$2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+adapter-pg@7.1.0/node_modules/@prisma/adapter-pg/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$adapter$2d$pg$40$7$2e$1$2e$0$2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$adapter$2d$pg$40$7$2e$1$2e$0$2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const globalForPrisma = globalThis;
function createPrismaClient() {
    // Lazy import env to avoid validation errors during build time
    // env.ts validates required env vars, which aren't available during 'next build'
    // Using dynamic require prevents the module from being evaluated at import time
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { env } = __turbopack_context__.r("[project]/apps/web/src/lib/env.ts [app-route] (ecmascript)");
    const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["Pool"]({
        connectionString: env.DATABASE_URL,
        // Connection pool configuration optimized for Neon Free Tier
        // Neon Free Tier limit: 20 total connections
        max: 10,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 10000
    });
    const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$adapter$2d$pg$40$7$2e$1$2e$0$2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaPg"](pool);
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
        adapter
    });
}
// Lazy initialization: store in global object but don't initialize until first use
if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = undefined;
}
function getPrismaClient() {
    if (!globalForPrisma.prisma) {
        globalForPrisma.prisma = createPrismaClient();
    }
    return globalForPrisma.prisma;
}
const prisma = new Proxy({}, {
    get (target, prop) {
        const client = getPrismaClient();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return client[prop];
    }
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/pino [external] (pino, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("pino", () => require("pino"));

module.exports = mod;
}),
"[project]/apps/web/src/lib/logger.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRequestLogger",
    ()=>createRequestLogger,
    "logger",
    ()=>logger
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pino__$5b$external$5d$__$28$pino$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/pino [external] (pino, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/env.ts [app-route] (ecmascript)");
;
;
/**
 * Structured logger using Pino
 *
 * This replaces console.log/error/warn throughout the application with
 * structured JSON logging for better production observability.
 *
 * Features:
 * - Automatic PII redaction (passwords, tokens, emails)
 * - Pretty-printed output in development
 * - JSON output in production for log aggregation
 * - Configurable log levels via LOG_LEVEL env var
 *
 * @example
 * ```ts
 * import { logger } from '@/lib/logger';
 *
 * logger.info({ userId }, 'User registered successfully');
 * logger.error({ err: error }, 'Database query failed');
 * logger.warn({ duration: 1500 }, 'Slow query detected');
 * ```
 */ // Get log level from environment, default to 'info'
const logLevel = process.env.LOG_LEVEL || (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NODE_ENV === "production" ? "info" : "debug");
const logger = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$pino__$5b$external$5d$__$28$pino$2c$__cjs$29$__["default"])({
    level: logLevel,
    // Redact sensitive fields from logs
    redact: {
        paths: [
            "password",
            "token",
            "email",
            "companionToken",
            "apiToken",
            "AUTH_SECRET",
            "DATABASE_URL",
            "*.password",
            "*.token",
            "*.companionToken",
            "req.headers.authorization",
            "req.headers.cookie"
        ],
        censor: "[REDACTED]"
    },
    // Format log level as a string (not a number)
    formatters: {
        level: (label)=>({
                level: label
            })
    },
    // Use pino-pretty for readable logs in development
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NODE_ENV === "development" && {
        transport: {
            target: "pino-pretty",
            options: {
                colorize: true,
                translateTime: "HH:MM:ss",
                ignore: "pid,hostname"
            }
        }
    }
});
function createRequestLogger(requestId, userId) {
    return logger.child({
        requestId,
        ...userId && {
            userId
        }
    });
}
}),
"[project]/apps/web/src/lib/security-logger.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getIpSecurityEvents",
    ()=>getIpSecurityEvents,
    "getUserSecurityEvents",
    ()=>getUserSecurityEvents,
    "logSecurityEvent",
    ()=>logSecurityEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/logger.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function logSecurityEvent(data) {
    try {
        // Hash email for privacy (can still correlate events without storing PII)
        const emailHash = data.email ? __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash("sha256").update(data.email).digest("hex") : undefined;
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].securityEvent.create({
            data: {
                type: data.type,
                userId: data.userId,
                ipAddress: data.ipAddress,
                userAgent: data.userAgent,
                metadata: {
                    ...data.metadata,
                    emailHash
                }
            }
        });
        // Check for suspicious activity patterns
        if (data.type === "LOGIN_FAILED") {
            await checkFailedLoginThreshold(data.ipAddress);
        }
        if (data.type === "RATE_LIMIT_EXCEEDED") {
            await checkRateLimitPattern(data.ipAddress);
        }
    } catch (error) {
        // Don't fail the request if logging fails
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error({
            error,
            eventType: data.type
        }, "Failed to log security event");
    }
}
/**
 * Check if an IP has exceeded the failed login threshold
 * Alert if >10 failed logins in the last hour
 */ async function checkFailedLoginThreshold(ipAddress) {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const failedAttempts = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].securityEvent.count({
        where: {
            type: "LOGIN_FAILED",
            ipAddress,
            createdAt: {
                gte: oneHourAgo
            }
        }
    });
    if (failedAttempts >= 10) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].warn({
            ipAddress,
            failedAttempts
        }, "Suspicious login activity detected - possible brute force attack");
    }
}
/**
 * Check if an IP is repeatedly hitting rate limits
 * Alert if >5 rate limit violations in 15 minutes
 */ async function checkRateLimitPattern(ipAddress) {
    const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);
    const rateLimitHits = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].securityEvent.count({
        where: {
            type: "RATE_LIMIT_EXCEEDED",
            ipAddress,
            createdAt: {
                gte: fifteenMinutesAgo
            }
        }
    });
    if (rateLimitHits >= 5) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].warn({
            ipAddress,
            rateLimitHits
        }, "Repeated rate limit violations - possible automated attack");
    }
}
async function getUserSecurityEvents(userId, limit = 50) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].securityEvent.findMany({
        where: {
            userId
        },
        orderBy: {
            createdAt: "desc"
        },
        take: limit
    });
}
async function getIpSecurityEvents(ipAddress, limit = 50) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].securityEvent.findMany({
        where: {
            ipAddress
        },
        orderBy: {
            createdAt: "desc"
        },
        take: limit
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$30_nex_5cd500642f96487cf75b316aefb401ff$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.30_nex_5cd500642f96487cf75b316aefb401ff/node_modules/next-auth/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$30_nex_5cd500642f96487cf75b316aefb401ff$2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.30_nex_5cd500642f96487cf75b316aefb401ff/node_modules/next-auth/providers/credentials.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$41$2e$0$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@auth+core@0.41.0/node_modules/@auth/core/providers/credentials.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/bcryptjs@3.0.3/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$security$2d$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/security-logger.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$security$2d$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$security$2d$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const { handlers, signIn, signOut, auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$30_nex_5cd500642f96487cf75b316aefb401ff$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    trustHost: true,
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$41$2e$0$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials, request) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                const email = credentials.email;
                const password = credentials.password;
                // Get IP and user agent from request
                const ipAddress = request?.headers?.get("x-forwarded-for") || request?.headers?.get("x-real-ip") || "unknown";
                const userAgent = request?.headers?.get("user-agent") ?? undefined;
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                    where: {
                        email
                    }
                });
                if (!user) {
                    // Log failed login - user not found
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$security$2d$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logSecurityEvent"])({
                        type: "LOGIN_FAILED",
                        email,
                        ipAddress,
                        userAgent,
                        metadata: {
                            reason: "user_not_found"
                        }
                    });
                    return null;
                }
                const passwordMatch = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, user.password);
                if (!passwordMatch) {
                    // Log failed login - invalid password
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$security$2d$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logSecurityEvent"])({
                        type: "LOGIN_FAILED",
                        userId: user.id,
                        email,
                        ipAddress,
                        userAgent,
                        metadata: {
                            reason: "invalid_password"
                        }
                    });
                    return null;
                }
                // Log successful login
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$security$2d$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logSecurityEvent"])({
                    type: "LOGIN_SUCCESS",
                    userId: user.id,
                    email,
                    ipAddress,
                    userAgent
                });
                return {
                    id: user.id,
                    email: user.email,
                    name: user.name
                };
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt ({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session ({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
            }
            return session;
        }
    }
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/lib/quest-status.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Quest Status Computation Utility
 *
 * Computes the effective quest status based on stored status and objective progress.
 * This is used to determine IN_PROGRESS status when some objectives are done.
 */ __turbopack_context__.s([
    "computeObjectiveProgress",
    ()=>computeObjectiveProgress,
    "computeQuestStatus",
    ()=>computeQuestStatus,
    "isObjectiveComplete",
    ()=>isObjectiveComplete,
    "shouldAutoCompleteQuest",
    ()=>shouldAutoCompleteQuest,
    "wouldObjectiveChangeQuestStatus",
    ()=>wouldObjectiveChangeQuestStatus
]);
function isObjectiveComplete(progress) {
    if (!progress) return false;
    // For numeric objectives, check current >= target
    if (progress.target !== null && progress.target !== undefined && progress.target > 0) {
        const current = progress.current ?? 0;
        return current >= progress.target;
    }
    // For binary objectives, use the completed flag
    return progress.completed === true;
}
function computeObjectiveProgress(objectives) {
    let total = 0;
    let completed = 0;
    let requiredTotal = 0;
    let requiredCompleted = 0;
    for (const obj of objectives){
        total++;
        const isComplete = isObjectiveComplete(obj.progress?.[0]);
        if (isComplete) {
            completed++;
        }
        if (!obj.optional) {
            requiredTotal++;
            if (isComplete) {
                requiredCompleted++;
            }
        }
    }
    return {
        total,
        completed,
        requiredTotal,
        requiredCompleted
    };
}
function computeQuestStatus(storedStatus, objectives, defaultStatus = "AVAILABLE") {
    // If locked, stay locked - dependencies take precedence
    if (storedStatus === "LOCKED") {
        return "LOCKED";
    }
    // If no objectives, use stored status or default
    if (objectives.length === 0) {
        return storedStatus ?? defaultStatus;
    }
    const { requiredTotal, requiredCompleted } = computeObjectiveProgress(objectives);
    // If no required objectives, treat all objectives as required
    const effectiveTotal = requiredTotal > 0 ? requiredTotal : objectives.length;
    const effectiveCompleted = requiredTotal > 0 ? requiredCompleted : objectives.filter((o)=>isObjectiveComplete(o.progress?.[0])).length;
    // All required objectives complete -> COMPLETED
    if (effectiveCompleted >= effectiveTotal && effectiveTotal > 0) {
        return "COMPLETED";
    }
    // Some required objectives complete -> IN_PROGRESS
    if (effectiveCompleted > 0) {
        return "IN_PROGRESS";
    }
    // No objectives complete, use stored status or default
    return storedStatus ?? defaultStatus;
}
function shouldAutoCompleteQuest(objectives) {
    if (objectives.length === 0) {
        return false; // Can't auto-complete a quest with no objectives
    }
    const requiredObjectives = objectives.filter((o)=>!o.optional);
    // If no required objectives, all objectives must be complete
    const targetObjectives = requiredObjectives.length > 0 ? requiredObjectives : objectives;
    return targetObjectives.every((o)=>isObjectiveComplete(o.progress?.[0]));
}
function wouldObjectiveChangeQuestStatus(currentStatus, objectives, objectiveId, newCompletedValue, newCurrent, newTarget) {
    // Create a copy of objectives with the updated progress
    const updatedObjectives = objectives.map((obj)=>{
        if (obj.id === objectiveId) {
            return {
                ...obj,
                progress: [
                    {
                        completed: newCompletedValue,
                        current: newCurrent ?? null,
                        target: newTarget ?? null
                    }
                ]
            };
        }
        return obj;
    });
    const newStatus = computeQuestStatus(currentStatus, updatedObjectives);
    return {
        wouldChange: newStatus !== currentStatus,
        newStatus
    };
}
}),
"[project]/apps/web/src/app/api/quests/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/logger.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$quest$2d$status$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/quest-status.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
/**
 * Check if a dependency requirement is satisfied based on the required status types
 * and the actual progress status.
 */ function isDependencyMet(requirementStatus, actualStatus) {
    if (!actualStatus) return false;
    const normalizedActual = actualStatus.toUpperCase();
    for (const reqStatus of requirementStatus){
        const normalizedReq = reqStatus.toLowerCase();
        if (normalizedReq === "complete" && normalizedActual === "COMPLETED") {
            return true;
        }
        if (normalizedReq === "active" && (normalizedActual === "IN_PROGRESS" || normalizedActual === "COMPLETED")) {
            return true;
        }
    }
    return false;
}
/**
 * Recursively check if a quest should be locked based on its dependency chain.
 * This handles the case where a prerequisite quest has stored progress "COMPLETED"
 * but should actually be locked because ITS prerequisites are not met.
 *
 * Uses memoization to avoid redundant computation.
 */ function isQuestEffectivelyLocked(questId, quests, memo) {
    // Check memo first
    if (memo.has(questId)) {
        return memo.get(questId);
    }
    const quest = quests.find((q)=>q.id === questId);
    if (!quest) {
        // Quest not in results (filtered out), assume not locked
        memo.set(questId, false);
        return false;
    }
    // If no dependencies, quest is not locked - it's available to start
    // (The actual status will come from stored progress or default to "available")
    if (quest.dependsOn.length === 0) {
        memo.set(questId, false);
        return false;
    }
    // Check each dependency
    for (const dep of quest.dependsOn){
        const depQuest = quests.find((q)=>q.id === dep.requiredQuest.id);
        const requirementStatus = dep.requirementStatus || [
            "complete"
        ];
        // Get progress status - prefer from filtered results, fall back to dependency data
        // This is important when searching/filtering: the dependency quest may not be in
        // the filtered results, but we still have its progress via the dependsOn relation
        let storedStatus = null;
        if (depQuest) {
            storedStatus = depQuest.progress?.[0]?.status || null;
        } else {
            // Quest not in filtered results - use progress from dependency relation
            // The requiredQuest now includes progress data for the current user
            const reqQuestProgress = dep.requiredQuest.progress;
            storedStatus = reqQuestProgress?.[0]?.status || null;
        }
        // First check: Is the stored status sufficient?
        if (!isDependencyMet(requirementStatus, storedStatus)) {
            // Stored status doesn't meet requirement
            memo.set(questId, true);
            return true;
        }
        // Second check: Even if stored status is COMPLETED/IN_PROGRESS,
        // is the prerequisite quest effectively locked due to its own dependencies?
        // Only do this recursive check if the quest is in the filtered results
        // (we can't check deeper dependencies if the quest isn't loaded)
        if (depQuest && isQuestEffectivelyLocked(dep.requiredQuest.id, quests, memo)) {
            // The prerequisite is effectively locked, so this dependency is not truly met
            memo.set(questId, true);
            return true;
        }
    }
    // All dependencies are met
    memo.set(questId, false);
    return false;
}
async function handleGET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const kappa = searchParams.get("kappa");
        const search = searchParams.get("search");
        // Get current user session for progress
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
        const userId = session?.user?.id;
        // Build where clause
        const where = {};
        if (kappa === "true") {
            where.kappaRequired = true;
        }
        if (search) {
            where.title = {
                contains: search,
                mode: "insensitive"
            };
        }
        // Fetch quests with related data including objective progress
        const quests = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].quest.findMany({
            where,
            include: {
                trader: true,
                objectives: {
                    include: {
                        progress: userId ? {
                            where: {
                                userId
                            }
                        } : false
                    }
                },
                dependsOn: {
                    include: {
                        requiredQuest: {
                            include: {
                                trader: true,
                                progress: userId ? {
                                    where: {
                                        userId
                                    }
                                } : false
                            }
                        }
                    }
                },
                dependedOnBy: {
                    include: {
                        dependentQuest: {
                            include: {
                                trader: true
                            }
                        }
                    }
                },
                progress: userId ? {
                    where: {
                        userId
                    }
                } : false
            },
            orderBy: [
                {
                    levelRequired: "asc"
                },
                {
                    title: "asc"
                }
            ]
        });
        // Memoization map for recursive dependency checking
        const lockMemo = new Map();
        // Transform to include computed status and objective progress summary
        const questsWithStatus = quests.map((quest)=>{
            const progress = quest.progress?.[0] || null;
            // Use recursive function to check if quest should be locked
            // This properly handles chains where a prerequisite has "COMPLETED" stored
            // but should actually be locked due to its own unmet dependencies
            const shouldBeLocked = isQuestEffectivelyLocked(quest.id, quests, lockMemo);
            // Convert objectives to ObjectiveWithProgress format
            const objectivesWithProgress = quest.objectives.map((obj)=>({
                    id: obj.id,
                    optional: obj.optional,
                    progress: obj.progress || []
                }));
            // Compute objective progress summary
            const objectivesSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$quest$2d$status$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeObjectiveProgress"])(objectivesWithProgress);
            // Determine base status considering dependencies
            let baseStatus = progress?.status ?? null;
            if (shouldBeLocked) {
                baseStatus = "LOCKED";
            }
            // Compute final status considering objective progress
            const computedStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$quest$2d$status$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeQuestStatus"])(baseStatus, objectivesWithProgress, shouldBeLocked ? "LOCKED" : "AVAILABLE").toLowerCase();
            return {
                ...quest,
                progress,
                computedStatus,
                objectivesSummary
            };
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            quests: questsWithStatus,
            total: questsWithStatus.length
        });
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error({
            err: error
        }, "Error fetching quests");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch quests"
        }, {
            status: 500
        });
    }
}
const GET = handleGET;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__09a77bc2._.js.map