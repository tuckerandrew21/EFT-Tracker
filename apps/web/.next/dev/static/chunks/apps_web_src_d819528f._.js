(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/lib/trader-colors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EFT_COLORS",
    ()=>EFT_COLORS,
    "STATUS_COLORS",
    ()=>STATUS_COLORS,
    "TRADER_COLORS",
    ()=>TRADER_COLORS,
    "getTraderColor",
    ()=>getTraderColor
]);
const EFT_COLORS = {
    goldOne: "#e8e6d4",
    goldTwo: "#c4aa6a",
    gunmetal: "#272727",
    gunmetalDark: "#1a1a1a",
    blackLight: "#0f0f0f",
    border: "rgba(196, 170, 106, 0.4)"
};
const TRADER_COLORS = {
    prapor: {
        primary: "#c41e3a",
        bg: EFT_COLORS.gunmetal
    },
    therapist: {
        primary: "#ff69b4",
        bg: EFT_COLORS.gunmetal
    },
    skier: {
        primary: "#1e90ff",
        bg: EFT_COLORS.gunmetal
    },
    peacekeeper: {
        primary: "#228b22",
        bg: EFT_COLORS.gunmetal
    },
    mechanic: {
        primary: "#ff8c00",
        bg: EFT_COLORS.gunmetal
    },
    ragman: {
        primary: "#9370db",
        bg: EFT_COLORS.gunmetal
    },
    jaeger: {
        primary: "#8b4513",
        bg: EFT_COLORS.gunmetal
    },
    fence: {
        primary: "#708090",
        bg: EFT_COLORS.gunmetal
    },
    lightkeeper: {
        primary: "#ffd700",
        bg: EFT_COLORS.gunmetal
    },
    ref: {
        primary: "#20b2aa",
        bg: EFT_COLORS.gunmetal
    }
};
function getTraderColor(traderId) {
    return TRADER_COLORS[traderId.toLowerCase()] || {
        primary: EFT_COLORS.goldTwo,
        bg: EFT_COLORS.gunmetal
    };
}
const STATUS_COLORS = {
    locked: {
        primary: "#5a5a5a",
        bg: "#1a1a1a",
        border: "#3a3a3a"
    },
    available: {
        primary: "#4db8ff",
        bg: "#1a1a1a",
        border: "#4db8ff"
    },
    in_progress: {
        primary: "#fbbf24",
        bg: "#1a1a1a",
        border: "#fbbf24"
    },
    completed: {
        primary: "#4ade80",
        bg: "#1e2e1e",
        border: "#4ade80"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/ui/tooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$2_eed5a66450b80cb577f0d7d9f4d01cc3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-tooltip@1.2_eed5a66450b80cb577f0d7d9f4d01cc3/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function TooltipProvider({ delayDuration = 0, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$2_eed5a66450b80cb577f0d7d9f4d01cc3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        "data-slot": "tooltip-provider",
        delayDuration: delayDuration,
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/tooltip.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = TooltipProvider;
function Tooltip({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipProvider, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$2_eed5a66450b80cb577f0d7d9f4d01cc3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "tooltip",
            ...props
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ui/tooltip.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/tooltip.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c1 = Tooltip;
function TooltipTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$2_eed5a66450b80cb577f0d7d9f4d01cc3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tooltip-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/tooltip.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
_c2 = TooltipTrigger;
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$2_eed5a66450b80cb577f0d7d9f4d01cc3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$2_eed5a66450b80cb577f0d7d9f4d01cc3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "tooltip-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$2_eed5a66450b80cb577f0d7d9f4d01cc3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
                    className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ui/tooltip.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/ui/tooltip.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/tooltip.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c3 = TooltipContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TooltipProvider");
__turbopack_context__.k.register(_c1, "Tooltip");
__turbopack_context__.k.register(_c2, "TooltipTrigger");
__turbopack_context__.k.register(_c3, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useLongPress.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLongPress",
    ()=>useLongPress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useLongPress({ threshold = 500, onLongPress, onClick }) {
    _s();
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isLongPressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const startPosRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLongPress.useCallback[clear]": ()=>{
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        }
    }["useLongPress.useCallback[clear]"], []);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLongPress.useCallback[start]": (x, y)=>{
            clear();
            isLongPressRef.current = false;
            startPosRef.current = {
                x,
                y
            };
            timerRef.current = setTimeout({
                "useLongPress.useCallback[start]": ()=>{
                    isLongPressRef.current = true;
                    onLongPress();
                }
            }["useLongPress.useCallback[start]"], threshold);
        }
    }["useLongPress.useCallback[start]"], [
        clear,
        onLongPress,
        threshold
    ]);
    const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLongPress.useCallback[end]": ()=>{
            if (!isLongPressRef.current && onClick) {
                // Only fire click if it wasn't a long press
                onClick();
            }
            clear();
            startPosRef.current = null;
        }
    }["useLongPress.useCallback[end]"], [
        clear,
        onClick
    ]);
    // Cancel if user moves finger/mouse too far (prevents accidental triggers while scrolling)
    const move = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLongPress.useCallback[move]": (x, y)=>{
            if (!startPosRef.current) return;
            const dx = Math.abs(x - startPosRef.current.x);
            const dy = Math.abs(y - startPosRef.current.y);
            // Cancel if moved more than 10px
            if (dx > 10 || dy > 10) {
                clear();
                startPosRef.current = null;
            }
        }
    }["useLongPress.useCallback[move]"], [
        clear
    ]);
    const onTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLongPress.useCallback[onTouchStart]": (e)=>{
            const touch = e.touches[0];
            start(touch.clientX, touch.clientY);
        }
    }["useLongPress.useCallback[onTouchStart]"], [
        start
    ]);
    const onTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLongPress.useCallback[onTouchEnd]": ()=>{
            end();
        }
    }["useLongPress.useCallback[onTouchEnd]"], [
        end
    ]);
    const onTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLongPress.useCallback[onTouchMove]": (e)=>{
            const touch = e.touches[0];
            move(touch.clientX, touch.clientY);
        }
    }["useLongPress.useCallback[onTouchMove]"], [
        move
    ]);
    const onMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLongPress.useCallback[onMouseDown]": (e)=>{
            // Only for left click
            if (e.button !== 0) return;
            start(e.clientX, e.clientY);
        }
    }["useLongPress.useCallback[onMouseDown]"], [
        start
    ]);
    const onMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLongPress.useCallback[onMouseUp]": ()=>{
            end();
        }
    }["useLongPress.useCallback[onMouseUp]"], [
        end
    ]);
    const onMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLongPress.useCallback[onMouseLeave]": ()=>{
            clear();
            startPosRef.current = null;
        }
    }["useLongPress.useCallback[onMouseLeave]"], [
        clear
    ]);
    return {
        onTouchStart,
        onTouchEnd,
        onTouchMove,
        onMouseDown,
        onMouseUp,
        onMouseLeave
    };
}
_s(useLongPress, "HDAGK5ZcB0zIpXkxo7IQJPEq2cM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/quest-tree/QuestNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QUEST_NODE_HEIGHT",
    ()=>QUEST_NODE_HEIGHT,
    "QUEST_NODE_HEIGHT_MOBILE",
    ()=>QUEST_NODE_HEIGHT_MOBILE,
    "QUEST_NODE_WIDTH",
    ()=>QUEST_NODE_WIDTH,
    "QUEST_NODE_WIDTH_MOBILE",
    ()=>QUEST_NODE_WIDTH_MOBILE,
    "QuestNode",
    ()=>QuestNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$0_$40$type_45359bf79dedb503dc90ebb5b1769299$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@xyflow+react@12.10.0_@type_45359bf79dedb503dc90ebb5b1769299/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$74$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@xyflow+system@0.0.74/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/trader-colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useLongPress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useLongPress.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const QUEST_NODE_WIDTH = 155;
const QUEST_NODE_HEIGHT = 58;
const QUEST_NODE_WIDTH_MOBILE = 130;
const QUEST_NODE_HEIGHT_MOBILE = 58;
// Static styles extracted to module-level constants (prevents object recreation)
const HANDLE_STYLE = {
    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_COLORS"].locked.primary
};
const KAPPA_BADGE_STYLE = {
    backgroundColor: "#FFD700"
};
const WIKI_LINK_STYLE = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_COLORS"].locked.primary
};
const TITLE_STYLE = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EFT_COLORS"].goldOne
};
const CHECKMARK_STYLE = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_COLORS"].completed.primary
};
function QuestNodeComponent({ data, selected }) {
    _s();
    const { quest, // nodeHeight - dynamic height is passed but we use fixed dimensions for now
    // onClick - available for selection, but status change is handled by parent
    onDetails, isRoot, isLeaf, isFocused, isInFocusChain, hasFocusMode, playerLevel, isSaving, isKeyboardSelected } = data;
    const traderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraderColor"])(quest.traderId);
    const statusColor = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_COLORS"][quest.computedStatus];
    // Level-based highlighting
    const isLevelAppropriate = playerLevel !== null && quest.levelRequired <= playerLevel;
    const isUpcoming = playerLevel !== null && quest.levelRequired > playerLevel && quest.levelRequired <= playerLevel + 5;
    // Find cross-trader dependencies (prereqs from different traders)
    const crossTraderDeps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuestNodeComponent.useMemo[crossTraderDeps]": ()=>{
            if (!quest.dependsOn) return [];
            return quest.dependsOn.filter({
                "QuestNodeComponent.useMemo[crossTraderDeps]": (dep)=>dep.requiredQuest.traderId.toLowerCase() !== quest.traderId.toLowerCase()
            }["QuestNodeComponent.useMemo[crossTraderDeps]"]).map({
                "QuestNodeComponent.useMemo[crossTraderDeps]": (dep)=>({
                        traderId: dep.requiredQuest.traderId.toLowerCase(),
                        traderName: dep.requiredQuest.trader.name,
                        questTitle: dep.requiredQuest.title
                    })
            }["QuestNodeComponent.useMemo[crossTraderDeps]"]);
        }
    }["QuestNodeComponent.useMemo[crossTraderDeps]"], [
        quest.dependsOn,
        quest.traderId
    ]);
    // Group by trader for display
    const crossTraderBadges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuestNodeComponent.useMemo[crossTraderBadges]": ()=>{
            const byTrader = new Map();
            for (const dep of crossTraderDeps){
                const existing = byTrader.get(dep.traderId);
                if (existing) {
                    existing.count++;
                } else {
                    byTrader.set(dep.traderId, {
                        name: dep.traderName,
                        count: 1
                    });
                }
            }
            return Array.from(byTrader.entries()).map({
                "QuestNodeComponent.useMemo[crossTraderBadges]": ([traderId, info])=>({
                        traderId,
                        ...info
                    })
            }["QuestNodeComponent.useMemo[crossTraderBadges]"]);
        }
    }["QuestNodeComponent.useMemo[crossTraderBadges]"], [
        crossTraderDeps
    ]);
    // Should this node be dimmed? (focus mode active but not in chain)
    const isDimmed = hasFocusMode && !isInFocusChain && !isFocused;
    // Memoize style objects to prevent breaking memo equality checks
    const nodeStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuestNodeComponent.useMemo[nodeStyle]": ()=>{
            // All quests use trader color for border (dimmed gets gray)
            const borderColor = isDimmed ? "#636363" : traderColor.primary;
            return {
                width: QUEST_NODE_WIDTH,
                minHeight: QUEST_NODE_HEIGHT,
                backgroundColor: isDimmed ? "#424242" : statusColor.bg,
                borderColor
            };
        }
    }["QuestNodeComponent.useMemo[nodeStyle]"], [
        isDimmed,
        statusColor.bg,
        traderColor.primary
    ]);
    const levelBadgeStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuestNodeComponent.useMemo[levelBadgeStyle]": ()=>({
                color: isLevelAppropriate ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_COLORS"].completed.primary : isUpcoming ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_COLORS"].available.primary : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_COLORS"].locked.primary,
                fontWeight: isLevelAppropriate ? 600 : 400
            })
    }["QuestNodeComponent.useMemo[levelBadgeStyle]"], [
        isLevelAppropriate,
        isUpcoming
    ]);
    const handleContextMenu = (e)=>{
        e.preventDefault();
        // Right-click to open quest details
        if (onDetails) {
            onDetails(quest.id);
        }
    };
    const handleInfoClick = (e)=>{
        e.preventDefault();
        e.stopPropagation(); // Prevents node click/status change
        if (onDetails) {
            onDetails(quest.id);
        }
    };
    const handleInfoMouseDown = (e)=>{
        e.stopPropagation(); // Prevent React Flow from intercepting
    };
    const handleWikiLinkClick = (e)=>{
        e.preventDefault();
        e.stopPropagation(); // Prevents node click/status change
        if (quest.wikiLink) {
            window.open(quest.wikiLink, "_blank", "noopener,noreferrer");
        }
    };
    const handleWikiLinkMouseDown = (e)=>{
        e.stopPropagation(); // Prevent React Flow from intercepting
    };
    // Long-press handler for mobile (alternative to right-click context menu)
    const longPressHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useLongPress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLongPress"])({
        threshold: 500,
        onLongPress: {
            "QuestNodeComponent.useLongPress[longPressHandlers]": ()=>{
                if (onDetails && !isDimmed) {
                    onDetails(quest.id);
                }
            }
        }["QuestNodeComponent.useLongPress[longPressHandlers]"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isRoot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$0_$40$type_45359bf79dedb503dc90ebb5b1769299$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "target",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$74$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Left,
                className: "!w-1.5 !h-1.5",
                style: HANDLE_STYLE
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onContextMenu: handleContextMenu,
                ...longPressHandlers,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative cursor-pointer rounded border-2 p-2 transition-all duration-150", "hover:shadow-md active:scale-95", selected && "ring-2 ring-offset-2 ring-blue-500", quest.computedStatus === "locked" && !isDimmed && "opacity-70", quest.computedStatus === "completed" && !isDimmed && "opacity-80", quest.computedStatus === "available" && !isDimmed && "shadow-sm hover:shadow-lg", // Visual hierarchy indicators (only when not dimmed)
                isRoot && !isDimmed && "border-l-4 border-l-emerald-500", isLeaf && !isDimmed && "border-r-4 border-r-violet-500", // Kappa indicated by badge only, no ring
                // Focus mode styling
                isFocused && "ring-4 ring-blue-500 shadow-lg scale-105", isInFocusChain && !isFocused && "ring-2 ring-blue-300", isDimmed && "opacity-40 pointer-events-auto", // Level-based highlighting (only for available quests, not when keyboard selected)
                // Kappa quests use badge indicator, so skip ring highlighting for them
                isLevelAppropriate && quest.computedStatus === "available" && !isDimmed && !isFocused && !isKeyboardSelected && !quest.kappaRequired && "ring-2 ring-emerald-400 shadow-emerald-100", isUpcoming && quest.computedStatus !== "completed" && !isDimmed && !isFocused && !isKeyboardSelected && !quest.kappaRequired && // Kappa quests use badge, not ring
                "ring-1 ring-amber-300", // Keyboard navigation selection (orange ring to distinguish from focus) - applied last to take precedence
                isKeyboardSelected && !isFocused && "ring-2 ring-orange-400 ring-offset-1 shadow-lg"),
                style: nodeStyle,
                children: [
                    quest.kappaRequired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-1 -right-1 w-3 h-3 rounded-full flex items-center justify-center text-[7px] font-bold text-white",
                        style: KAPPA_BADGE_STYLE,
                        title: "Required for Kappa",
                        children: "K"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this),
                    crossTraderBadges.length > 0 && !isDimmed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-1 left-1 flex gap-px",
                        children: [
                            crossTraderBadges.slice(0, 2).map((badge)=>{
                                const badgeColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraderColor"])(badge.traderId);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-0.5 rounded text-[7px] font-medium text-white",
                                    style: {
                                        backgroundColor: badgeColor.primary
                                    },
                                    title: `Requires quest(s) from ${badge.name}`,
                                    children: badge.name.slice(0, 2)
                                }, badge.traderId, false, {
                                    fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                    lineNumber: 230,
                                    columnNumber: 17
                                }, this);
                            }),
                            crossTraderBadges.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-0.5 rounded text-[7px] font-medium text-white",
                                style: HANDLE_STYLE,
                                children: [
                                    "+",
                                    crossTraderBadges.length - 2
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                lineNumber: 241,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this),
                    isSaving && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20 rounded",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "w-5 h-5 animate-spin text-primary"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                            lineNumber: 254,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this),
                    quest.computedStatus === "completed" && !isSaving && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 opacity-40",
                            style: CHECKMARK_STYLE,
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 3,
                                d: "M5 13l4 4L19 7"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                lineNumber: 268,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                            lineNumber: 261,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-semibold text-[14px] leading-tight line-clamp-2",
                        style: TITLE_STYLE,
                        title: quest.title,
                        children: quest.title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase tracking-wide",
                                        style: {
                                            color: "var(--text-tertiary)"
                                        },
                                        children: "Lv"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[12px] font-semibold",
                                        style: levelBadgeStyle,
                                        children: quest.levelRequired
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    !isDimmed && onDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        delayDuration: 300,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleInfoClick,
                                                    onMouseDown: handleInfoMouseDown,
                                                    onTouchStart: (e)=>e.stopPropagation(),
                                                    onTouchEnd: (e)=>{
                                                        e.stopPropagation();
                                                        e.preventDefault();
                                                        if (onDetails) onDetails(quest.id);
                                                    },
                                                    className: "w-6 h-6 flex items-center justify-center opacity-60 hover:opacity-100 transition-colors duration-150 rounded-full hover:bg-black/20 focus:outline-none focus:ring-1 focus:ring-offset-1 pointer-events-auto",
                                                    style: WIKI_LINK_STYLE,
                                                    "aria-label": `View ${quest.title} details`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                        className: "w-[14px] h-[14px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                                lineNumber: 308,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                side: "top",
                                                sideOffset: 4,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs",
                                                    children: "View Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this),
                                    quest.wikiLink && !isDimmed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        delayDuration: 300,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleWikiLinkClick,
                                                    onMouseDown: handleWikiLinkMouseDown,
                                                    onTouchStart: (e)=>e.stopPropagation(),
                                                    onTouchEnd: (e)=>{
                                                        e.stopPropagation();
                                                        e.preventDefault();
                                                        if (quest.wikiLink) {
                                                            window.open(quest.wikiLink, "_blank", "noopener,noreferrer");
                                                        }
                                                    },
                                                    className: "w-6 h-6 flex items-center justify-center opacity-60 hover:opacity-100 transition-colors duration-150 rounded-full hover:bg-black/20 focus:outline-none focus:ring-1 focus:ring-offset-1 pointer-events-auto",
                                                    style: WIKI_LINK_STYLE,
                                                    "aria-label": `Open ${quest.title} wiki page`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                        className: "w-[14px] h-[14px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                                lineNumber: 334,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                side: "top",
                                                sideOffset: 4,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs",
                                                    children: "View on Tarkov Wiki"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                                lineNumber: 358,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            !isLeaf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$0_$40$type_45359bf79dedb503dc90ebb5b1769299$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$74$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Right,
                className: "!w-1.5 !h-1.5",
                style: HANDLE_STYLE
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestNode.tsx",
                lineNumber: 368,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(QuestNodeComponent, "9vE+SD/4mlwT++dfAJ6pICzhfmA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useLongPress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLongPress"]
    ];
});
_c = QuestNodeComponent;
const QuestNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(QuestNodeComponent);
_c1 = QuestNode;
var _c, _c1;
__turbopack_context__.k.register(_c, "QuestNodeComponent");
__turbopack_context__.k.register(_c1, "QuestNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/quest-layout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LANE_CONFIG",
    ()=>LANE_CONFIG,
    "buildCrossTraderEdges",
    ()=>buildCrossTraderEdges,
    "buildQuestGraph",
    ()=>buildQuestGraph,
    "buildTraderLaneGraph",
    ()=>buildTraderLaneGraph,
    "calculateGlobalDepths",
    ()=>calculateGlobalDepths,
    "calculateNodeHeight",
    ()=>calculateNodeHeight,
    "calculateTraderLocalDepths",
    ()=>calculateTraderLocalDepths,
    "computeQuestStatus",
    ()=>computeQuestStatus,
    "computeTraderOrder",
    ()=>computeTraderOrder,
    "filterQuestsByColumns",
    ()=>filterQuestsByColumns,
    "filterQuestsByTrader",
    ()=>filterQuestsByTrader,
    "getIncompletePrerequisites",
    ()=>getIncompletePrerequisites,
    "getQuestChain",
    ()=>getQuestChain,
    "getQuestMaps",
    ()=>getQuestMaps,
    "layoutTraderLane",
    ()=>layoutTraderLane,
    "splitQuestsByTrader",
    ()=>splitQuestsByTrader,
    "stackTraderLanes",
    ()=>stackTraderLanes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$40$0$2e$8$2e$5$2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/dagre@0.8.5/node_modules/dagre/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/QuestNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/trader-colors.ts [app-client] (ecmascript)");
;
;
;
const LAYOUT_CONFIG = {
    rankdir: "LR",
    nodesep: 10,
    ranksep: 20,
    marginx: 5,
    marginy: 10
};
const LANE_CONFIG = {
    TRADER_NODE_WIDTH: 60,
    TRADER_NODE_HEIGHT: 40,
    BASE_LANE_HEIGHT: 80,
    LANE_SPACING: 25,
    TRADER_TO_QUEST_GAP: 20,
    QUEST_VERTICAL_GAP: 25
};
// Fixed trader order (optimized for common cross-dependencies)
const TRADER_ORDER = [
    "prapor",
    "therapist",
    "skier",
    "peacekeeper",
    "mechanic",
    "ragman",
    "jaeger",
    "fence",
    "lightkeeper"
];
function calculateNodeHeight(title) {
    // Base height for single-line title (matches QUEST_NODE_HEIGHT)
    const baseHeight = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_HEIGHT"];
    // Approximate characters per line at 14px font for 155px width node with 16px total padding
    // Content width ~139px, at ~9px per char average = ~15 chars per line
    const charsPerLine = 15;
    const estimatedLines = Math.ceil(title.length / charsPerLine);
    // Cap at 2 lines maximum (matches line-clamp-2 in QuestNode)
    const lines = Math.min(estimatedLines, 2);
    // 18px per additional line (14px font + line spacing)
    return baseHeight + (lines - 1) * 18;
}
function getQuestChain(questId, quests) {
    const questMap = new Map(quests.map((q)=>[
            q.id,
            q
        ]));
    const chain = new Set();
    // Add the focused quest itself
    chain.add(questId);
    // Recursively get all prerequisites (quests this one depends on)
    function getPrerequisites(id) {
        const quest = questMap.get(id);
        if (!quest) return;
        for (const dep of quest.dependsOn || []){
            if (!chain.has(dep.requiredQuest.id)) {
                chain.add(dep.requiredQuest.id);
                getPrerequisites(dep.requiredQuest.id);
            }
        }
    }
    // Recursively get all dependents (quests that depend on this one)
    function getDependents(id) {
        const quest = questMap.get(id);
        if (!quest) return;
        for (const dep of quest.dependedOnBy || []){
            if (!chain.has(dep.dependentQuest.id)) {
                chain.add(dep.dependentQuest.id);
                getDependents(dep.dependentQuest.id);
            }
        }
    }
    getPrerequisites(questId);
    getDependents(questId);
    return chain;
}
function getIncompletePrerequisites(questId, quests) {
    const questMap = new Map(quests.map((q)=>[
            q.id,
            q
        ]));
    const prerequisites = [];
    const seen = new Set();
    function collectPrereqs(id) {
        const quest = questMap.get(id);
        if (!quest) return;
        for (const dep of quest.dependsOn || []){
            const prereqId = dep.requiredQuest.id;
            if (seen.has(prereqId)) continue;
            seen.add(prereqId);
            // First recurse to get deeper prerequisites (post-order traversal)
            collectPrereqs(prereqId);
            // Then add this prerequisite (after its own prerequisites)
            const prereqQuest = questMap.get(prereqId);
            if (prereqQuest && prereqQuest.computedStatus !== "completed") {
                prerequisites.push(prereqQuest);
            }
        }
    }
    collectPrereqs(questId);
    // Return in dependency order (no sorting - order matters for skip feature)
    return prerequisites;
}
function buildQuestGraph(quests, options) {
    const { onStatusChange, onClick, onFocus, onDetails, selectedQuestId, focusedQuestId, focusChain, playerLevel, savingQuestIds, keyboardSelectedId } = options;
    const hasFocusMode = focusedQuestId !== null && focusedQuestId !== undefined;
    // Create a map for quick quest lookup
    const questMap = new Map(quests.map((q)=>[
            q.id,
            q
        ]));
    // Create Dagre graph
    const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$40$0$2e$8$2e$5$2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphlib.Graph().setDefaultEdgeLabel(()=>({}));
    g.setGraph(LAYOUT_CONFIG);
    // Add nodes
    for (const quest of quests){
        g.setNode(quest.id, {
            width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_WIDTH"],
            height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_HEIGHT"]
        });
    }
    // Add edges (from required quest to dependent quest)
    const edges = [];
    for (const quest of quests){
        for (const dep of quest.dependsOn || []){
            const requiredQuest = questMap.get(dep.requiredQuest.id);
            if (requiredQuest) {
                g.setEdge(dep.requiredQuest.id, quest.id);
                // Check if this edge is part of the focus chain
                const isEdgeInFocusChain = focusChain?.has(quest.id) && focusChain?.has(dep.requiredQuest.id);
                const shouldDimEdge = hasFocusMode && !isEdgeInFocusChain;
                // Get requirement status (default to ["complete"] for backwards compatibility)
                const requirementStatus = dep.requirementStatus || [
                    "complete"
                ];
                const isActiveOnly = requirementStatus.includes("active") && !requirementStatus.includes("complete");
                edges.push({
                    id: `${dep.requiredQuest.id}-${quest.id}`,
                    source: dep.requiredQuest.id,
                    target: quest.id,
                    type: "default",
                    animated: quest.computedStatus === "available" && !shouldDimEdge,
                    style: {
                        stroke: shouldDimEdge ? "#D1D5DB" // Dim gray when not in focus chain
                         : quest.computedStatus === "completed" ? "#10B981" : quest.computedStatus === "available" ? "#3B82F6" : quest.computedStatus === "locked" ? "#6B7280" : "#9CA3AF",
                        strokeWidth: isEdgeInFocusChain ? 3 : quest.kappaRequired ? 3 : 2,
                        strokeDasharray: isActiveOnly ? "5,5" : undefined,
                        opacity: shouldDimEdge ? 0.4 : quest.computedStatus === "locked" ? 0.5 : 1
                    },
                    data: {
                        sourceStatus: requiredQuest.computedStatus,
                        targetStatus: quest.computedStatus,
                        requirementStatus
                    }
                });
            }
        }
    }
    // Run Dagre layout
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$40$0$2e$8$2e$5$2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].layout(g);
    // Find root quests (no incoming edges / no dependencies)
    const rootQuestIds = new Set(quests.filter((q)=>!q.dependsOn?.length).map((q)=>q.id));
    // Find leaf quests (no outgoing edges / no dependents)
    const leafQuestIds = new Set(quests.filter((q)=>!q.dependedOnBy?.length).map((q)=>q.id));
    // Find the minimum x position among root quests to align them at the left
    let minRootX = Infinity;
    for (const questId of rootQuestIds){
        const node = g.node(questId);
        if (node && node.x < minRootX) {
            minRootX = node.x;
        }
    }
    // Calculate shift to align roots at left margin
    const shiftX = minRootX - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_WIDTH"] / 2 - LAYOUT_CONFIG.marginx;
    // Convert to React Flow nodes with adjusted positions
    const nodes = quests.map((quest)=>{
        const nodeWithPosition = g.node(quest.id);
        const isInFocusChain = focusChain?.has(quest.id) ?? false;
        return {
            id: quest.id,
            type: "quest",
            position: {
                // Dagre returns center position, adjust to top-left for React Flow
                // Also shift all nodes left so roots align at the margin
                x: nodeWithPosition.x - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_WIDTH"] / 2 - shiftX,
                y: nodeWithPosition.y - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_HEIGHT"] / 2
            },
            data: {
                quest,
                isSelected: quest.id === selectedQuestId,
                isRoot: rootQuestIds.has(quest.id),
                isLeaf: leafQuestIds.has(quest.id),
                isFocused: quest.id === focusedQuestId,
                isInFocusChain,
                hasFocusMode,
                playerLevel: playerLevel ?? null,
                isSaving: savingQuestIds?.has(quest.id) ?? false,
                isKeyboardSelected: quest.id === keyboardSelectedId,
                onStatusChange,
                onClick,
                onFocus,
                onDetails
            }
        };
    });
    return {
        nodes,
        edges
    };
}
function filterQuestsByTrader(quests, traderId) {
    return quests.filter((q)=>q.traderId === traderId);
}
function calculateTraderLocalDepths(quests, traderId) {
    const depths = new Map();
    const traderQuests = quests.filter((q)=>q.traderId.toLowerCase() === traderId.toLowerCase());
    const questMap = new Map(traderQuests.map((q)=>[
            q.id,
            q
        ]));
    function getDepth(questId, visited) {
        if (visited.has(questId)) return 0;
        visited.add(questId);
        if (depths.has(questId)) return depths.get(questId);
        const quest = questMap.get(questId);
        if (!quest) return 0;
        // Find same-trader prerequisites
        const sameTraderPrereqs = (quest.dependsOn || []).filter((dep)=>{
            const prereq = questMap.get(dep.requiredQuest.id);
            return prereq !== undefined;
        });
        if (sameTraderPrereqs.length === 0) {
            depths.set(questId, 0);
            return 0;
        }
        let maxPrereqDepth = 0;
        for (const dep of sameTraderPrereqs){
            const prereqDepth = getDepth(dep.requiredQuest.id, new Set(visited));
            maxPrereqDepth = Math.max(maxPrereqDepth, prereqDepth);
        }
        const depth = maxPrereqDepth + 1;
        depths.set(questId, depth);
        return depth;
    }
    for (const quest of traderQuests){
        getDepth(quest.id, new Set());
    }
    return depths;
}
function filterQuestsByColumns(quests, traderId, maxColumns, globalDepths) {
    if (maxColumns === null) return quests;
    const traderQuests = quests.filter((q)=>q.traderId.toLowerCase() === traderId.toLowerCase());
    // Use global depths if provided, otherwise fall back to local depths
    const depths = globalDepths ?? calculateTraderLocalDepths(quests, traderId);
    // Include quests with depth < maxColumns (0-indexed, so depth 0-4 for maxColumns=5)
    return traderQuests.filter((q)=>{
        const depth = depths.get(q.id) ?? 0;
        return depth < maxColumns;
    });
}
function getQuestMaps(quests) {
    const maps = new Set();
    for (const quest of quests){
        for (const obj of quest.objectives || []){
            if (obj.map) {
                maps.add(obj.map);
            }
        }
    }
    return Array.from(maps).sort();
}
function computeQuestStatus(quest, questMap) {
    // If user has explicit progress, use that
    if (quest.progress) {
        return quest.progress.status;
    }
    // Check if all dependencies are completed
    const allDepsCompleted = (quest.dependsOn || []).every((dep)=>{
        const requiredQuest = questMap.get(dep.requiredQuest.id);
        return requiredQuest?.computedStatus === "completed";
    });
    // If no dependencies or all completed, quest is available
    if (quest.dependsOn?.length === 0 || allDepsCompleted) {
        return "available";
    }
    return "locked";
}
function calculateGlobalDepths(quests) {
    const depths = new Map();
    const questMap = new Map(quests.map((q)=>[
            q.id,
            q
        ]));
    // Single Set for cycle detection - reused across all calculations
    const visiting = new Set();
    // Recursive function to calculate depth with memoization
    function getDepth(questId) {
        // Return cached result if available
        if (depths.has(questId)) {
            return depths.get(questId);
        }
        // Prevent infinite loops (cycle detection)
        if (visiting.has(questId)) return 0;
        visiting.add(questId);
        const quest = questMap.get(questId);
        if (!quest) {
            visiting.delete(questId);
            return 0;
        }
        // No dependencies = depth 0 (root quest)
        if (!quest.dependsOn || quest.dependsOn.length === 0) {
            visiting.delete(questId);
            depths.set(questId, 0);
            return 0;
        }
        // Depth = max depth of all dependencies + 1
        let maxDepPrereqDepth = 0;
        for (const dep of quest.dependsOn){
            const prereqDepth = getDepth(dep.requiredQuest.id);
            maxDepPrereqDepth = Math.max(maxDepPrereqDepth, prereqDepth);
        }
        const depth = maxDepPrereqDepth + 1;
        visiting.delete(questId);
        depths.set(questId, depth);
        return depth;
    }
    // Calculate depth for all quests
    for (const quest of quests){
        getDepth(quest.id);
    }
    return depths;
}
function splitQuestsByTrader(quests) {
    const groups = new Map();
    // Group quests by trader
    for (const quest of quests){
        const traderId = quest.traderId.toLowerCase();
        if (!groups.has(traderId)) {
            groups.set(traderId, {
                traderId,
                trader: quest.trader,
                quests: [],
                rootQuests: [],
                intraTraderDeps: [],
                crossTraderDeps: []
            });
        }
        groups.get(traderId).quests.push(quest);
    }
    // Classify dependencies for each quest
    for (const quest of quests){
        const traderId = quest.traderId.toLowerCase();
        const group = groups.get(traderId);
        let hasIntraTraderDep = false;
        for (const dep of quest.dependsOn || []){
            const sourceTraderId = dep.requiredQuest.traderId.toLowerCase();
            if (sourceTraderId === traderId) {
                // Intra-trader dependency
                group.intraTraderDeps.push({
                    sourceId: dep.requiredQuest.id,
                    targetId: quest.id
                });
                hasIntraTraderDep = true;
            } else {
                // Cross-trader dependency
                group.crossTraderDeps.push({
                    sourceQuestId: dep.requiredQuest.id,
                    sourceTraderId,
                    targetQuestId: quest.id,
                    targetTraderId: traderId
                });
                // Also add to the source trader's group
                const sourceGroup = groups.get(sourceTraderId);
                if (sourceGroup) {
                    sourceGroup.crossTraderDeps.push({
                        sourceQuestId: dep.requiredQuest.id,
                        sourceTraderId,
                        targetQuestId: quest.id,
                        targetTraderId: traderId
                    });
                }
            }
        }
        // If no intra-trader dependencies, it's a root quest for this trader
        if (!hasIntraTraderDep) {
            group.rootQuests.push(quest);
        }
    }
    return groups;
}
function computeTraderOrder(groups) {
    // Build adjacency weights (count of cross-trader dependencies)
    const weights = new Map();
    for (const group of groups.values()){
        if (!weights.has(group.traderId)) {
            weights.set(group.traderId, new Map());
        }
        for (const dep of group.crossTraderDeps){
            // Count connections between traders
            const w = weights.get(group.traderId);
            const currentWeight = w.get(dep.sourceTraderId) || 0;
            w.set(dep.sourceTraderId, currentWeight + 1);
        }
    }
    // Start with fixed order, but could be optimized with barycenter heuristic
    const traderIds = Array.from(groups.keys());
    // Sort by TRADER_ORDER, unknown traders go to end
    traderIds.sort((a, b)=>{
        const aIndex = TRADER_ORDER.indexOf(a);
        const bIndex = TRADER_ORDER.indexOf(b);
        if (aIndex === -1 && bIndex === -1) return 0;
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
    });
    return traderIds;
}
function layoutTraderLane(group, options, globalDepths) {
    const { onStatusChange, onClick, onFocus, onDetails, selectedQuestId, focusedQuestId, focusChain, playerLevel, savingQuestIds, keyboardSelectedId } = options;
    const hasFocusMode = focusedQuestId !== null && focusedQuestId !== undefined;
    // Create Dagre graph for this trader only
    const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$40$0$2e$8$2e$5$2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphlib.Graph().setDefaultEdgeLabel(()=>({}));
    g.setGraph({
        rankdir: "LR",
        nodesep: LANE_CONFIG.QUEST_VERTICAL_GAP,
        ranksep: LAYOUT_CONFIG.ranksep,
        marginx: 0,
        marginy: 0
    });
    // Find minimum depth in this trader's quests (to normalize positions)
    let minDepthInLane = Infinity;
    for (const quest of group.quests){
        const depth = globalDepths.get(quest.id) ?? 0;
        minDepthInLane = Math.min(minDepthInLane, depth);
    }
    if (minDepthInLane === Infinity) minDepthInLane = 0;
    // Add quest nodes with dynamic heights
    for (const quest of group.quests){
        const nodeHeight = calculateNodeHeight(quest.title);
        g.setNode(quest.id, {
            width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_WIDTH"],
            height: nodeHeight
        });
    }
    // For quests with cross-trader deps, we need to add invisible spacer nodes
    // to push them to the correct column based on their global depth.
    // This handles both: quests with ONLY cross-trader deps, AND quests with
    // both intra-trader AND cross-trader deps (Dagre uses max constraint).
    const questsWithCrossTraderDeps = group.quests.filter((quest)=>{
        return group.crossTraderDeps.some((d)=>d.targetQuestId === quest.id);
    });
    // Create a chain of spacer nodes for each depth level needed
    const spacersByDepth = new Map();
    let maxSpacerDepth = 0;
    for (const quest of questsWithCrossTraderDeps){
        const globalDepth = globalDepths.get(quest.id) ?? 0;
        // Normalize to lane-relative depth
        const localDepth = globalDepth - minDepthInLane;
        if (localDepth > 0) {
            maxSpacerDepth = Math.max(maxSpacerDepth, localDepth);
        }
    }
    // Create spacer chain: spacer-0 -> spacer-1 -> spacer-2 -> ...
    // The spacer chain is anchored to root quests so Dagre aligns them properly
    if (maxSpacerDepth > 0) {
        for(let i = 0; i <= maxSpacerDepth; i++){
            const spacerId = `__spacer_${group.traderId}_${i}`;
            spacersByDepth.set(i, spacerId);
            g.setNode(spacerId, {
                width: 1,
                height: 1
            });
            if (i > 0) {
                const prevSpacerId = spacersByDepth.get(i - 1);
                g.setEdge(prevSpacerId, spacerId);
            }
        }
        // Anchor spacer_0 to root quests so the spacer chain aligns with the quest tree
        const spacer0 = spacersByDepth.get(0);
        if (spacer0) {
            for (const rootQuest of group.rootQuests){
                // Only connect if this root quest doesn't have cross-trader deps
                // (otherwise it will be connected to a deeper spacer)
                const hasCrossTraderDep = questsWithCrossTraderDeps.some((q)=>q.id === rootQuest.id);
                if (!hasCrossTraderDep) {
                    g.setEdge(spacer0, rootQuest.id);
                }
            }
        }
    }
    // Connect quests with cross-trader deps to the appropriate spacer
    // Dagre will use the maximum of all incoming edge constraints
    for (const quest of questsWithCrossTraderDeps){
        const globalDepth = globalDepths.get(quest.id) ?? 0;
        const localDepth = globalDepth - minDepthInLane;
        if (localDepth > 0) {
            // Connect from the spacer at depth-1 to this quest
            const spacerId = spacersByDepth.get(localDepth - 1);
            if (spacerId) {
                g.setEdge(spacerId, quest.id);
            }
        }
    }
    // Add only intra-trader edges
    const edges = [];
    const questMap = new Map(group.quests.map((q)=>[
            q.id,
            q
        ]));
    for (const dep of group.intraTraderDeps){
        g.setEdge(dep.sourceId, dep.targetId);
        const sourceQuest = questMap.get(dep.sourceId);
        const targetQuest = questMap.get(dep.targetId);
        if (sourceQuest && targetQuest) {
            const isEdgeInFocusChain = focusChain?.has(targetQuest.id) && focusChain?.has(dep.sourceId);
            const shouldDimEdge = hasFocusMode && !isEdgeInFocusChain;
            // Find the dependency to get requirementStatus
            const dependency = targetQuest.dependsOn?.find((d)=>d.requiredQuest.id === dep.sourceId);
            const requirementStatus = dependency?.requirementStatus || [
                "complete"
            ];
            const isActiveOnly = requirementStatus.includes("active") && !requirementStatus.includes("complete");
            edges.push({
                id: `${dep.sourceId}-${dep.targetId}`,
                source: dep.sourceId,
                target: dep.targetId,
                type: "default",
                animated: targetQuest.computedStatus === "available" && !shouldDimEdge,
                style: {
                    stroke: shouldDimEdge ? "#D1D5DB" : targetQuest.computedStatus === "completed" ? "#10B981" : targetQuest.computedStatus === "available" ? "#3B82F6" : targetQuest.computedStatus === "locked" ? "#6B7280" : "#9CA3AF",
                    strokeWidth: isEdgeInFocusChain ? 3 : targetQuest.kappaRequired ? 3 : 2,
                    strokeDasharray: isActiveOnly ? "5,5" : undefined,
                    opacity: shouldDimEdge ? 0.4 : targetQuest.computedStatus === "locked" ? 0.5 : 1
                },
                data: {
                    sourceStatus: sourceQuest.computedStatus,
                    targetStatus: targetQuest.computedStatus,
                    requirementStatus
                }
            });
        }
    }
    // Run Dagre layout
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$40$0$2e$8$2e$5$2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].layout(g);
    // Find bounds
    let maxX = 0;
    let maxY = 0;
    let minY = Infinity;
    for (const quest of group.quests){
        const node = g.node(quest.id);
        if (node) {
            maxX = Math.max(maxX, node.x + __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_WIDTH"] / 2);
            maxY = Math.max(maxY, node.y + __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_HEIGHT"] / 2);
            minY = Math.min(minY, node.y - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_HEIGHT"] / 2);
        }
    }
    // Calculate lane height based on actual content
    const contentHeight = group.quests.length > 0 ? maxY - minY : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_HEIGHT"];
    const laneHeight = Math.max(LANE_CONFIG.BASE_LANE_HEIGHT, contentHeight + 20);
    // Find root quests for visual indicator
    const rootQuestIds = new Set(group.rootQuests.map((q)=>q.id));
    // Find leaf quests
    const hasOutgoingDep = new Set(group.intraTraderDeps.map((d)=>d.sourceId));
    const leafQuestIds = new Set(group.quests.filter((q)=>!hasOutgoingDep.has(q.id)).map((q)=>q.id));
    // Convert to nodes (positions relative to lane origin)
    // First pass: calculate positions
    const nodePositions = group.quests.map((quest)=>{
        const nodeWithPosition = g.node(quest.id);
        return {
            quest,
            x: nodeWithPosition.x - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_WIDTH"] / 2,
            // Convert from Dagre center position to top-left
            y: nodeWithPosition.y - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_HEIGHT"] / 2
        };
    });
    // Find the minimum Y to normalize all positions so first quest starts at y=0
    const minQuestY = Math.min(...nodePositions.map((p)=>p.y));
    // Second pass: create nodes with normalized positions
    const nodes = nodePositions.map(({ quest, x, y })=>{
        const isInFocusChain = focusChain?.has(quest.id) ?? false;
        // Calculate dynamic height for this quest
        const nodeHeight = calculateNodeHeight(quest.title);
        return {
            id: quest.id,
            type: "quest",
            position: {
                x,
                y: y - minQuestY
            },
            data: {
                quest,
                nodeHeight,
                isSelected: quest.id === selectedQuestId,
                isRoot: rootQuestIds.has(quest.id),
                isLeaf: leafQuestIds.has(quest.id),
                isFocused: quest.id === focusedQuestId,
                isInFocusChain,
                hasFocusMode,
                playerLevel: playerLevel ?? null,
                isSaving: savingQuestIds?.has(quest.id) ?? false,
                isKeyboardSelected: quest.id === keyboardSelectedId,
                onStatusChange,
                onClick,
                onFocus,
                onDetails
            }
        };
    });
    return {
        traderId: group.traderId,
        nodes,
        edges,
        laneHeight,
        laneWidth: maxX
    };
}
function stackTraderLanes(laneLayouts, traderOrder, groups) {
    const allNodes = [];
    const allEdges = [];
    const laneYOffsets = new Map();
    let currentY = LAYOUT_CONFIG.marginy;
    for (const traderId of traderOrder){
        const lane = laneLayouts.find((l)=>l.traderId === traderId);
        const group = groups.get(traderId);
        if (!lane || !group) continue;
        // Store lane position
        laneYOffsets.set(traderId, {
            y: currentY,
            height: lane.laneHeight
        });
        // Create trader header node
        const traderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraderColor"])(traderId);
        const completedCount = group.quests.filter((q)=>q.computedStatus === "completed").length;
        // Create trader node on the left, spanning full lane height
        const traderNode = {
            id: `trader-${traderId}`,
            type: "trader",
            position: {
                x: 0,
                y: currentY
            },
            data: {
                traderId,
                traderName: group.trader.name,
                color: traderColor.primary,
                questCount: group.quests.length,
                completedCount,
                laneHeight: lane.laneHeight
            }
        };
        allNodes.push(traderNode);
        // Offset quest nodes to the right of trader
        const xOffset = LANE_CONFIG.TRADER_NODE_WIDTH + LANE_CONFIG.TRADER_TO_QUEST_GAP;
        for (const node of lane.nodes){
            allNodes.push({
                ...node,
                position: {
                    x: node.position.x + xOffset,
                    y: node.position.y + currentY
                }
            });
        }
        // Add edges
        allEdges.push(...lane.edges);
        // Move to next lane
        currentY += lane.laneHeight + LANE_CONFIG.LANE_SPACING;
    }
    // Normalize positions so content starts near (0, 0) with padding
    // Include ALL nodes (traders + quests) in minX calculation so traders don't end up negative
    if (allNodes.length > 0) {
        const minX = Math.min(...allNodes.map((n)=>n.position.x));
        const minY = Math.min(...allNodes.map((n)=>n.position.y));
        // Normalize all nodes
        const normalizedNodes = allNodes.map((node)=>({
                ...node,
                position: {
                    x: node.position.x - minX + LAYOUT_CONFIG.marginx,
                    y: node.position.y - minY + LAYOUT_CONFIG.marginy
                }
            }));
        return {
            nodes: normalizedNodes,
            edges: allEdges,
            laneYOffsets
        };
    }
    return {
        nodes: allNodes,
        edges: allEdges,
        laneYOffsets
    };
}
function buildCrossTraderEdges(groups, options) {
    const { focusChain, hasFocusMode } = options;
    const crossEdges = [];
    const seenEdges = new Set();
    for (const group of groups.values()){
        for (const dep of group.crossTraderDeps){
            // Only add edge once (from source side)
            if (dep.sourceTraderId !== group.traderId) continue;
            const edgeId = `cross-${dep.sourceQuestId}-${dep.targetQuestId}`;
            if (seenEdges.has(edgeId)) continue;
            seenEdges.add(edgeId);
            const isInFocusChain = focusChain?.has(dep.sourceQuestId) && focusChain?.has(dep.targetQuestId);
            const shouldDim = hasFocusMode && !isInFocusChain;
            crossEdges.push({
                id: edgeId,
                source: dep.sourceQuestId,
                target: dep.targetQuestId,
                type: "smoothstep",
                animated: false,
                style: {
                    stroke: shouldDim ? "#E5E7EB" : "#9CA3AF",
                    strokeWidth: 1.5,
                    strokeDasharray: "6,4",
                    opacity: shouldDim ? 0.4 : 0.7
                },
                data: {
                    isCrossTrader: true,
                    sourceTraderId: dep.sourceTraderId,
                    targetTraderId: dep.targetTraderId
                }
            });
        }
    }
    return crossEdges;
}
function buildTraderLaneGraph(quests, allQuests, traders, options) {
    const { maxColumns } = options;
    // Step 1: Calculate global depths using ALL quests (not just filtered)
    // This ensures cross-trader dependencies are correctly positioned even when filtered
    const globalDepths = calculateGlobalDepths(allQuests);
    // Step 2: Split quests by trader
    const groups = splitQuestsByTrader(quests);
    // Step 2.5: Apply column-based filtering if maxColumns is set
    // Use global depths so cross-trader dependencies are correctly accounted for
    if (maxColumns !== null && maxColumns !== undefined) {
        for (const [traderId, group] of groups){
            const filteredQuests = filterQuestsByColumns(quests, traderId, maxColumns, globalDepths // Pass global depths to properly filter cross-trader quests
            );
            // Update group with filtered quests
            group.quests = filteredQuests;
            // Recalculate root quests and dependencies for filtered set
            const filteredIds = new Set(filteredQuests.map((q)=>q.id));
            // Filter intra-trader deps to only include edges where both quests are visible
            group.intraTraderDeps = group.intraTraderDeps.filter((dep)=>filteredIds.has(dep.sourceId) && filteredIds.has(dep.targetId));
            // Recalculate root quests (no intra-trader deps pointing to them)
            const hasIncomingDep = new Set(group.intraTraderDeps.map((d)=>d.targetId));
            group.rootQuests = filteredQuests.filter((q)=>!hasIncomingDep.has(q.id));
            // Filter cross-trader deps to only include visible quests
            group.crossTraderDeps = group.crossTraderDeps.filter((dep)=>filteredIds.has(dep.sourceQuestId) || filteredIds.has(dep.targetQuestId));
        }
    }
    // Step 3: Compute trader order
    const traderOrder = computeTraderOrder(groups);
    // Step 4: Layout each trader lane (with global depths for cross-trader positioning)
    const laneLayouts = [];
    for (const traderId of traderOrder){
        const group = groups.get(traderId);
        if (group && group.quests.length > 0) {
            laneLayouts.push(layoutTraderLane(group, options, globalDepths));
        }
    }
    // Step 5: Stack lanes vertically
    const stackedLayout = stackTraderLanes(laneLayouts, traderOrder, groups);
    // Note: Cross-trader edges removed - they create confusing long paths.
    // Cross-trader dependencies are shown via badges on QuestNode instead.
    return {
        nodes: stackedLayout.nodes,
        edges: stackedLayout.edges,
        laneYOffsets: stackedLayout.laneYOffsets,
        traderOrder
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/quest-tree/TraderNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TraderNode",
    ()=>TraderNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$quest$2d$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/quest-layout.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function TraderNodeComponent({ data }) {
    const { traderName, color, questCount, completedCount, laneHeight } = data;
    // Use lane height if provided, otherwise fall back to default
    const nodeHeight = laneHeight || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$quest$2d$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANE_CONFIG"].TRADER_NODE_HEIGHT;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded border flex items-center justify-center", "shadow-md font-medium bg-background"),
            style: {
                width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$quest$2d$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANE_CONFIG"].TRADER_NODE_WIDTH,
                height: nodeHeight,
                borderColor: color
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center gap-1",
                style: {
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-xs",
                        style: {
                            color
                        },
                        children: traderName
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/TraderNode.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-muted-foreground",
                        children: [
                            completedCount,
                            "/",
                            questCount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/quest-tree/TraderNode.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-tree/TraderNode.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/quest-tree/TraderNode.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_c = TraderNodeComponent;
const TraderNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(TraderNodeComponent);
_c1 = TraderNode;
var _c, _c1;
__turbopack_context__.k.register(_c, "TraderNodeComponent");
__turbopack_context__.k.register(_c1, "TraderNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useIsMobile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useIsMobile() {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsMobile.useEffect": ()=>{
            const checkMobile = {
                "useIsMobile.useEffect.checkMobile": ()=>setIsMobile(window.innerWidth < 768)
            }["useIsMobile.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "useIsMobile.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], []);
    return isMobile;
}
_s(useIsMobile, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/quest-tree/QuestTree.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @ts-nocheck - React 19 ReactFlow component type compatibility
__turbopack_context__.s([
    "QuestTree",
    ()=>QuestTree,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$0_$40$type_45359bf79dedb503dc90ebb5b1769299$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@xyflow+react@12.10.0_@type_45359bf79dedb503dc90ebb5b1769299/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/keyboard.js [app-client] (ecmascript) <export default as Keyboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/QuestNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$TraderNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/TraderNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$quest$2d$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/quest-layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/trader-colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useIsMobile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/tooltip.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
// Register custom node types
const nodeTypes = {
    quest: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuestNode"],
    trader: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$TraderNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TraderNode"]
};
function QuestTreeInner({ quests, allQuests, traders, selectedQuestId, playerLevel, maxColumns, savingQuestIds, onQuestSelect, onStatusChange, onQuestDetails }) {
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const { fitView, setViewport, getViewport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$0_$40$type_45359bf79dedb503dc90ebb5b1769299$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"])();
    const isInitializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Ref to access current nodes without causing effect re-runs
    const nodesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Ref for container to attach custom wheel handler
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Ref to store translate extent for use in wheel handler
    const translateExtentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    // Focus mode state
    const [focusedQuestId, setFocusedQuestId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Keyboard navigation state - tracks currently keyboard-selected node
    const [keyboardSelectedId, setKeyboardSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Calculate focus chain when focused quest changes
    // Use allQuests to include cross-trader dependencies in the chain
    const focusChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuestTreeInner.useMemo[focusChain]": ()=>{
            if (!focusedQuestId) return undefined;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$quest$2d$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getQuestChain"])(focusedQuestId, allQuests);
        }
    }["QuestTreeInner.useMemo[focusChain]"], [
        focusedQuestId,
        allQuests
    ]);
    // Handle focus on a quest
    const handleFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestTreeInner.useCallback[handleFocus]": (questId)=>{
            // Toggle focus if same quest, otherwise focus on new quest
            setFocusedQuestId({
                "QuestTreeInner.useCallback[handleFocus]": (prev)=>prev === questId ? null : questId
            }["QuestTreeInner.useCallback[handleFocus]"]);
        }
    }["QuestTreeInner.useCallback[handleFocus]"], []);
    // Build graph with layout
    const { initialNodes, initialEdges } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuestTreeInner.useMemo": ()=>{
            const graph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$quest$2d$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTraderLaneGraph"])(quests, allQuests, traders, {
                onStatusChange,
                onClick: onQuestSelect,
                onFocus: handleFocus,
                onDetails: onQuestDetails,
                selectedQuestId,
                focusedQuestId,
                focusChain,
                playerLevel,
                maxColumns,
                savingQuestIds,
                keyboardSelectedId
            });
            return {
                initialNodes: graph.nodes,
                initialEdges: graph.edges
            };
        }
    }["QuestTreeInner.useMemo"], [
        quests,
        allQuests,
        traders,
        selectedQuestId,
        playerLevel,
        maxColumns,
        savingQuestIds,
        focusedQuestId,
        focusChain,
        onStatusChange,
        onQuestSelect,
        handleFocus,
        onQuestDetails,
        keyboardSelectedId
    ]);
    const [nodes, setNodes, onNodesChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$0_$40$type_45359bf79dedb503dc90ebb5b1769299$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNodesState"])(initialNodes);
    const [edges, setEdges, onEdgesChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$0_$40$type_45359bf79dedb503dc90ebb5b1769299$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEdgesState"])(initialEdges);
    // Update nodes when quests or selection changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestTreeInner.useEffect": ()=>{
            setNodes(initialNodes);
            setEdges(initialEdges);
        }
    }["QuestTreeInner.useEffect"], [
        initialNodes,
        initialEdges,
        setNodes,
        setEdges
    ]);
    // Keep nodesRef in sync with nodes for use in effects that shouldn't re-run on node changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestTreeInner.useEffect": ()=>{
            nodesRef.current = nodes;
        }
    }["QuestTreeInner.useEffect"], [
        nodes
    ]);
    // Get quest nodes only (excluding trader nodes) for keyboard navigation
    const questNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuestTreeInner.useMemo[questNodes]": ()=>{
            return nodes.filter({
                "QuestTreeInner.useMemo[questNodes]": (n)=>n.type === "quest"
            }["QuestTreeInner.useMemo[questNodes]"]);
        }
    }["QuestTreeInner.useMemo[questNodes]"], [
        nodes
    ]);
    // Find nearest node in a direction for keyboard navigation
    const findNearestNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestTreeInner.useCallback[findNearestNode]": (currentId, direction)=>{
            const currentNode = questNodes.find({
                "QuestTreeInner.useCallback[findNearestNode].currentNode": (n)=>n.id === currentId
            }["QuestTreeInner.useCallback[findNearestNode].currentNode"]);
            if (!currentNode) return questNodes[0]?.id || null;
            const { x: cx, y: cy } = currentNode.position;
            // Filter nodes in the desired direction
            const candidates = questNodes.filter({
                "QuestTreeInner.useCallback[findNearestNode].candidates": (n)=>{
                    if (n.id === currentId) return false;
                    const { x, y } = n.position;
                    switch(direction){
                        case "up":
                            return y < cy;
                        case "down":
                            return y > cy;
                        case "left":
                            return x < cx;
                        case "right":
                            return x > cx;
                    }
                }
            }["QuestTreeInner.useCallback[findNearestNode].candidates"]);
            if (candidates.length === 0) return null;
            // Find the closest node in that direction
            // Weight the primary direction more heavily
            const getDistance = {
                "QuestTreeInner.useCallback[findNearestNode].getDistance": (node)=>{
                    const dx = Math.abs(node.position.x - cx);
                    const dy = Math.abs(node.position.y - cy);
                    // Primary direction weighted more
                    if (direction === "up" || direction === "down") {
                        return dy + dx * 0.5;
                    }
                    return dx + dy * 0.5;
                }
            }["QuestTreeInner.useCallback[findNearestNode].getDistance"];
            candidates.sort({
                "QuestTreeInner.useCallback[findNearestNode]": (a, b)=>getDistance(a) - getDistance(b)
            }["QuestTreeInner.useCallback[findNearestNode]"]);
            return candidates[0]?.id || null;
        }
    }["QuestTreeInner.useCallback[findNearestNode]"], [
        questNodes
    ]);
    // Handle keyboard navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestTreeInner.useEffect": ()=>{
            const handleKeyDown = {
                "QuestTreeInner.useEffect.handleKeyDown": (e)=>{
                    // Don't handle if user is typing in an input
                    const target = e.target;
                    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
                        return;
                    }
                    // ESC exits focus mode
                    if (e.key === "Escape") {
                        if (focusedQuestId) {
                            setFocusedQuestId(null);
                        } else if (keyboardSelectedId) {
                            setKeyboardSelectedId(null);
                        }
                        return;
                    }
                    // Arrow keys for navigation
                    if ([
                        "ArrowUp",
                        "ArrowDown",
                        "ArrowLeft",
                        "ArrowRight"
                    ].includes(e.key)) {
                        e.preventDefault();
                        // If no node selected, select the first quest node
                        if (!keyboardSelectedId) {
                            const firstQuest = questNodes[0];
                            if (firstQuest) {
                                setKeyboardSelectedId(firstQuest.id);
                            }
                            return;
                        }
                        const direction = e.key.replace("Arrow", "").toLowerCase();
                        const nextId = findNearestNode(keyboardSelectedId, direction);
                        if (nextId) {
                            setKeyboardSelectedId(nextId);
                            // Center view on the selected node
                            const node = nodesRef.current.find({
                                "QuestTreeInner.useEffect.handleKeyDown.node": (n)=>n.id === nextId
                            }["QuestTreeInner.useEffect.handleKeyDown.node"]);
                            if (node) {
                                fitView({
                                    nodes: [
                                        node
                                    ],
                                    duration: 150,
                                    padding: 0.5,
                                    maxZoom: 1.5
                                });
                            }
                        }
                        return;
                    }
                    // Only handle action keys if a node is selected
                    if (!keyboardSelectedId) return;
                    const selectedNode = nodesRef.current.find({
                        "QuestTreeInner.useEffect.handleKeyDown.selectedNode": (n)=>n.id === keyboardSelectedId
                    }["QuestTreeInner.useEffect.handleKeyDown.selectedNode"]);
                    const data = selectedNode?.data;
                    if (!data?.quest) return;
                    // Enter: Toggle quest status
                    if (e.key === "Enter") {
                        e.preventDefault();
                        onStatusChange(data.quest.id, data.quest.computedStatus);
                        return;
                    }
                    // Space: Open quest details
                    if (e.key === " ") {
                        e.preventDefault();
                        if (onQuestDetails) {
                            onQuestDetails(data.quest.id);
                        }
                        return;
                    }
                    // F: Enter focus mode on selected quest
                    if (e.key === "f" || e.key === "F") {
                        e.preventDefault();
                        handleFocus(data.quest.id);
                        return;
                    }
                }
            }["QuestTreeInner.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "QuestTreeInner.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["QuestTreeInner.useEffect"];
        }
    }["QuestTreeInner.useEffect"], [
        focusedQuestId,
        keyboardSelectedId,
        questNodes,
        findNearestNode,
        onStatusChange,
        onQuestDetails,
        handleFocus,
        fitView
    ]);
    // Set initial viewport to center content with appropriate zoom when React Flow is ready
    // Uses nodesRef to avoid callback recreation on every nodes change
    const onInit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestTreeInner.useCallback[onInit]": ()=>{
            if (!isInitializedRef.current && nodesRef.current.length > 0) {
                // First: fit all content to center it properly
                fitView({
                    padding: 0.1,
                    duration: 0
                });
                // Then: zoom in by 50% after fitView completes
                // Use setTimeout because fitView updates viewport asynchronously
                setTimeout({
                    "QuestTreeInner.useCallback[onInit]": ()=>{
                        const { x, y, zoom } = getViewport();
                        setViewport({
                            x,
                            y,
                            zoom: zoom * 1.5
                        }, {
                            duration: 0
                        });
                    }
                }["QuestTreeInner.useCallback[onInit]"], 50);
                isInitializedRef.current = true;
            }
        }
    }["QuestTreeInner.useCallback[onInit]"], [
        fitView,
        getViewport,
        setViewport
    ]);
    // Calculate bounds to constrain panning - include ALL nodes (traders + quests)
    const translateExtent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuestTreeInner.useMemo[translateExtent]": ()=>{
            if (nodes.length === 0) {
                return undefined;
            }
            const padding = 50; // Padding around all nodes
            // Use ALL nodes for bounds calculation so traders are included
            const minX = Math.min(...nodes.map({
                "QuestTreeInner.useMemo[translateExtent]": (n)=>n.position.x
            }["QuestTreeInner.useMemo[translateExtent]"])) - padding;
            const minY = Math.min(...nodes.map({
                "QuestTreeInner.useMemo[translateExtent]": (n)=>n.position.y
            }["QuestTreeInner.useMemo[translateExtent]"])) - padding;
            const maxX = Math.max(...nodes.map({
                "QuestTreeInner.useMemo[translateExtent]": (n)=>n.position.x + __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_WIDTH"]
            }["QuestTreeInner.useMemo[translateExtent]"])) + padding;
            const maxY = Math.max(...nodes.map({
                "QuestTreeInner.useMemo[translateExtent]": (n)=>n.position.y + __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_HEIGHT"]
            }["QuestTreeInner.useMemo[translateExtent]"])) + padding;
            return [
                [
                    minX,
                    minY
                ],
                [
                    maxX,
                    maxY
                ]
            ];
        }
    }["QuestTreeInner.useMemo[translateExtent]"], [
        nodes
    ]);
    // Sync translateExtent to ref for use in wheel handler (must be in effect, not render)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestTreeInner.useEffect": ()=>{
            translateExtentRef.current = translateExtent;
        }
    }["QuestTreeInner.useEffect"], [
        translateExtent
    ]);
    // Center on focused quest when focus changes
    // Uses nodesRef to avoid re-centering when nodes update while already focused
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestTreeInner.useEffect": ()=>{
            if (focusedQuestId) {
                const focusedNode = nodesRef.current.find({
                    "QuestTreeInner.useEffect.focusedNode": (n)=>n.id === focusedQuestId
                }["QuestTreeInner.useEffect.focusedNode"]);
                if (focusedNode) {
                    fitView({
                        nodes: [
                            focusedNode
                        ],
                        duration: 300,
                        padding: 0.5,
                        maxZoom: 1
                    });
                }
            }
        }
    }["QuestTreeInner.useEffect"], [
        focusedQuestId,
        fitView
    ]);
    // Custom wheel handler for vertical-only scrolling with bounds clamping
    // React Flow's panOnScrollMode doesn't reliably prevent horizontal movement on all devices
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestTreeInner.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const handleWheel = {
                "QuestTreeInner.useEffect.handleWheel": (e)=>{
                    // Only handle scroll events, not pinch-to-zoom (which has ctrlKey)
                    if (e.ctrlKey) return;
                    e.preventDefault();
                    const { x, y, zoom } = getViewport();
                    // Only use deltaY for vertical scrolling, ignore deltaX completely
                    const panSpeed = 0.8;
                    let newY = y - e.deltaY * panSpeed;
                    // Clamp to translateExtent bounds if available
                    const extent = translateExtentRef.current;
                    if (extent) {
                        const [[, minY], [, maxY]] = extent;
                        const viewportHeight = container.clientHeight;
                        // Calculate valid viewport.y range:
                        // - maxViewportY: can't scroll higher than top of content
                        // - minViewportY: can't scroll lower than bottom of content
                        const maxViewportY = -minY * zoom;
                        const minViewportY = viewportHeight - maxY * zoom;
                        // Clamp newY within valid range
                        newY = Math.max(minViewportY, Math.min(maxViewportY, newY));
                    }
                    setViewport({
                        x,
                        y: newY,
                        zoom
                    }, {
                        duration: 0
                    });
                }
            }["QuestTreeInner.useEffect.handleWheel"];
            container.addEventListener("wheel", handleWheel, {
                passive: false
            });
            return ({
                "QuestTreeInner.useEffect": ()=>container.removeEventListener("wheel", handleWheel)
            })["QuestTreeInner.useEffect"];
        }
    }["QuestTreeInner.useEffect"], [
        getViewport,
        setViewport
    ]);
    // Handle background click to exit focus mode
    const handlePaneClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestTreeInner.useCallback[handlePaneClick]": ()=>{
            if (focusedQuestId) {
                setFocusedQuestId(null);
            }
        }
    }["QuestTreeInner.useCallback[handlePaneClick]"], [
        focusedQuestId
    ]);
    // Handle node click for status change
    const handleNodeClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestTreeInner.useCallback[handleNodeClick]": (_event, node)=>{
            // Only handle quest nodes, not trader nodes
            const data = node.data;
            if (data?.quest) {
                const quest = data.quest;
                // Call status change handler
                onStatusChange(quest.id, quest.computedStatus);
            }
        }
    }["QuestTreeInner.useCallback[handleNodeClick]"], [
        onStatusChange
    ]);
    // Handle node double-click for focus mode
    const handleNodeDoubleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestTreeInner.useCallback[handleNodeDoubleClick]": (_event, node)=>{
            // Only handle quest nodes, not trader nodes
            const data = node.data;
            if (data?.quest) {
                handleFocus(data.quest.id);
            }
        }
    }["QuestTreeInner.useCallback[handleNodeDoubleClick]"], [
        handleFocus
    ]);
    // MiniMap node color based on trader
    const getNodeColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestTreeInner.useCallback[getNodeColor]": (node)=>{
            const data = node.data;
            if (data?.quest) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraderColor"])(data.quest.traderId).primary;
            }
            return "#636363";
        }
    }["QuestTreeInner.useCallback[getNodeColor]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "w-full h-full touch-pan-y relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 left-2 z-10 flex items-center gap-2",
                children: focusedQuestId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs px-3 py-1.5 rounded-full shadow-md flex items-center gap-2",
                    style: {
                        backgroundColor: "#9a8866",
                        color: "#1b1919"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Focus Mode"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                            lineNumber: 464,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFocusedQuestId(null),
                            className: "rounded-full p-0.5 hover:opacity-80",
                            title: "Exit focus mode (ESC)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-3 h-3",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                    lineNumber: 476,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                lineNumber: 470,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                            lineNumber: 465,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                    lineNumber: 460,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                lineNumber: 457,
                columnNumber: 7
            }, this),
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 right-2 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    delayDuration: 200,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 rounded-md bg-background/80 border border-border shadow-sm hover:bg-background transition-colors",
                                "aria-label": "Keyboard shortcuts",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__["Keyboard"], {
                                    className: "w-4 h-4 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                    lineNumber: 496,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                lineNumber: 492,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                            lineNumber: 491,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                            side: "left",
                            align: "start",
                            className: "max-w-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-foreground",
                                        children: "Keyboard Shortcuts"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                        lineNumber: 501,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1 text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Navigate quests"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                        className: "px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono",
                                                        children: "Arrow keys"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                lineNumber: 505,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Toggle status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                        lineNumber: 512,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                        className: "px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono",
                                                        children: "Enter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                        lineNumber: 513,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                lineNumber: 511,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Quest details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                        lineNumber: 518,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                        className: "px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono",
                                                        children: "Space"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                        lineNumber: 519,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                lineNumber: 517,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Focus mode"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                        lineNumber: 524,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                        className: "px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono",
                                                        children: "F"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                lineNumber: 523,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Search quests"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                        lineNumber: 530,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                        className: "px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono",
                                                        children: "/"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                        lineNumber: 531,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                lineNumber: 529,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Exit / Clear"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                        className: "px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono",
                                                        children: "Esc"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                                lineNumber: 535,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                        lineNumber: 504,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                                lineNumber: 500,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                            lineNumber: 499,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                    lineNumber: 490,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                lineNumber: 489,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$0_$40$type_45359bf79dedb503dc90ebb5b1769299$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlow"], {
                nodes: nodes,
                edges: edges,
                onNodesChange: onNodesChange,
                onEdgesChange: onEdgesChange,
                onPaneClick: handlePaneClick,
                onNodeClick: handleNodeClick,
                onNodeDoubleClick: handleNodeDoubleClick,
                onInit: onInit,
                nodeTypes: nodeTypes,
                nodesDraggable: false,
                nodesConnectable: false,
                elementsSelectable: false,
                defaultViewport: {
                    x: 0,
                    y: 0,
                    zoom: 1
                },
                translateExtent: translateExtent,
                minZoom: 0.1,
                maxZoom: isMobile ? 2 : 4,
                defaultEdgeOptions: {
                    type: "default"
                },
                proOptions: {
                    hideAttribution: true
                },
                panOnScroll: false,
                zoomOnScroll: false,
                panOnDrag: [
                    1,
                    2
                ],
                zoomOnPinch: true,
                zoomOnDoubleClick: false,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$0_$40$type_45359bf79dedb503dc90ebb5b1769299$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Controls"], {
                        showInteractive: false,
                        className: "!shadow-md",
                        position: isMobile ? "bottom-left" : "bottom-left"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                        lineNumber: 574,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$0_$40$type_45359bf79dedb503dc90ebb5b1769299$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Background"], {
                        variant: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$0_$40$type_45359bf79dedb503dc90ebb5b1769299$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BackgroundVariant"].Dots,
                        gap: 100,
                        size: 0,
                        color: "transparent",
                        style: {
                            backgroundColor: "#1e1e20"
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                        lineNumber: 580,
                        columnNumber: 9
                    }, this),
                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$0_$40$type_45359bf79dedb503dc90ebb5b1769299$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MiniMap"], {
                        nodeColor: getNodeColor,
                        nodeStrokeWidth: 3,
                        zoomable: true,
                        pannable: true,
                        className: "!bg-background/80 !border-border"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                        lineNumber: 589,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
                lineNumber: 547,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
        lineNumber: 455,
        columnNumber: 5
    }, this);
}
_s(QuestTreeInner, "DzXwOfP0d3KUXgd2nD9yHNOBCwI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$0_$40$type_45359bf79dedb503dc90ebb5b1769299$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$0_$40$type_45359bf79dedb503dc90ebb5b1769299$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNodesState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$0_$40$type_45359bf79dedb503dc90ebb5b1769299$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEdgesState"]
    ];
});
_c = QuestTreeInner;
function QuestTree(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$0_$40$type_45359bf79dedb503dc90ebb5b1769299$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlowProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuestTreeInner, {
            ...props
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
            lineNumber: 606,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/quest-tree/QuestTree.tsx",
        lineNumber: 605,
        columnNumber: 5
    }, this);
}
_c1 = QuestTree;
const __TURBOPACK__default__export__ = QuestTree;
var _c, _c1;
__turbopack_context__.k.register(_c, "QuestTreeInner");
__turbopack_context__.k.register(_c1, "QuestTree");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/ui/progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$progress$40$1$2e$_e834bd232c40e6c29367b9c8f2cc8fec$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-progress@1._e834bd232c40e6c29367b9c8f2cc8fec/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, value, indicatorClassName, style, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$progress$40$1$2e$_e834bd232c40e6c29367b9c8f2cc8fec$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$progress$40$1$2e$_e834bd232c40e6c29367b9c8f2cc8fec$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full w-full flex-1 transition-all", indicatorClassName || "bg-primary"),
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`,
                backgroundColor: style?.["--progress-color"]
            }
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ui/progress.tsx",
            lineNumber: 21,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/progress.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Progress;
Progress.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$progress$40$1$2e$_e834bd232c40e6c29367b9c8f2cc8fec$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Progress$React.forwardRef");
__turbopack_context__.k.register(_c1, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/ui/popover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover,
    "PopoverAnchor",
    ()=>PopoverAnchor,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1_22fd869f2fbef1b398318fe9ab4df5ce$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-popover@1.1_22fd869f2fbef1b398318fe9ab4df5ce/node_modules/@radix-ui/react-popover/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Popover({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1_22fd869f2fbef1b398318fe9ab4df5ce$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "popover",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/popover.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_c = Popover;
function PopoverTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1_22fd869f2fbef1b398318fe9ab4df5ce$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "popover-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/popover.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c1 = PopoverTrigger;
function PopoverAnchor({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1_22fd869f2fbef1b398318fe9ab4df5ce$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
        "data-slot": "popover-anchor",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/popover.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
_c2 = PopoverAnchor;
function PopoverContent({ className, align = "center", sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1_22fd869f2fbef1b398318fe9ab4df5ce$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1_22fd869f2fbef1b398318fe9ab4df5ce$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "popover-content",
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Refactoring UI: Popovers use elevation-lg for floating panels
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-elevation-lg outline-none", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ui/popover.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/popover.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c3 = PopoverContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Popover");
__turbopack_context__.k.register(_c1, "PopoverTrigger");
__turbopack_context__.k.register(_c2, "PopoverAnchor");
__turbopack_context__.k.register(_c3, "PopoverContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/progress-stats/ProgressStats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @ts-nocheck - React 19 Progress component type compatibility
__turbopack_context__.s([
    "ProgressStats",
    ()=>ProgressStats,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/trader-colors.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ProgressStats({ quests, traders }) {
    _s();
    // Calculate overall stats
    const overallStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProgressStats.useMemo[overallStats]": ()=>{
            const total = quests.length;
            const completed = quests.filter({
                "ProgressStats.useMemo[overallStats]": (q)=>q.computedStatus === "completed"
            }["ProgressStats.useMemo[overallStats]"]).length;
            const available = quests.filter({
                "ProgressStats.useMemo[overallStats]": (q)=>q.computedStatus === "available"
            }["ProgressStats.useMemo[overallStats]"]).length;
            const locked = quests.filter({
                "ProgressStats.useMemo[overallStats]": (q)=>q.computedStatus === "locked"
            }["ProgressStats.useMemo[overallStats]"]).length;
            return {
                total,
                completed,
                available,
                locked,
                percentage: total > 0 ? Math.round(completed / total * 100) : 0
            };
        }
    }["ProgressStats.useMemo[overallStats]"], [
        quests
    ]);
    // Calculate Kappa stats
    const kappaStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProgressStats.useMemo[kappaStats]": ()=>{
            const kappaQuests = quests.filter({
                "ProgressStats.useMemo[kappaStats].kappaQuests": (q)=>q.kappaRequired
            }["ProgressStats.useMemo[kappaStats].kappaQuests"]);
            const total = kappaQuests.length;
            const completed = kappaQuests.filter({
                "ProgressStats.useMemo[kappaStats]": (q)=>q.computedStatus === "completed"
            }["ProgressStats.useMemo[kappaStats]"]).length;
            const available = kappaQuests.filter({
                "ProgressStats.useMemo[kappaStats]": (q)=>q.computedStatus === "available"
            }["ProgressStats.useMemo[kappaStats]"]).length;
            return {
                total,
                completed,
                available,
                remaining: total - completed,
                percentage: total > 0 ? Math.round(completed / total * 100) : 0
            };
        }
    }["ProgressStats.useMemo[kappaStats]"], [
        quests
    ]);
    // Calculate per-trader stats
    const traderStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProgressStats.useMemo[traderStats]": ()=>{
            const stats = [];
            for (const trader of traders){
                const traderQuests = quests.filter({
                    "ProgressStats.useMemo[traderStats].traderQuests": (q)=>q.traderId === trader.id
                }["ProgressStats.useMemo[traderStats].traderQuests"]);
                const total = traderQuests.length;
                const completed = traderQuests.filter({
                    "ProgressStats.useMemo[traderStats]": (q)=>q.computedStatus === "completed"
                }["ProgressStats.useMemo[traderStats]"]).length;
                const available = traderQuests.filter({
                    "ProgressStats.useMemo[traderStats]": (q)=>q.computedStatus === "available"
                }["ProgressStats.useMemo[traderStats]"]).length;
                const locked = traderQuests.filter({
                    "ProgressStats.useMemo[traderStats]": (q)=>q.computedStatus === "locked"
                }["ProgressStats.useMemo[traderStats]"]).length;
                if (total > 0) {
                    stats.push({
                        traderId: trader.id,
                        traderName: trader.name,
                        total,
                        completed,
                        available,
                        locked,
                        percentage: Math.round(completed / total * 100)
                    });
                }
            }
            // Sort by completion percentage (descending)
            return stats.sort({
                "ProgressStats.useMemo[traderStats]": (a, b)=>b.percentage - a.percentage
            }["ProgressStats.useMemo[traderStats]"]);
        }
    }["ProgressStats.useMemo[traderStats]"], [
        quests,
        traders
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "flex items-center gap-2 px-3 py-1.5 rounded-md bg-background/80 border border-border hover:bg-muted transition-colors text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                            className: "w-4 h-4 text-[#d4a574]"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: [
                                overallStats.percentage,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "w-3 h-3 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                className: "w-80 p-0",
                align: "start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                    className: "w-4 h-4 text-[#0292c0]"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-sm",
                                                    children: "Overall Progress"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-muted-foreground",
                                            children: [
                                                overallStats.completed,
                                                "/",
                                                overallStats.total
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                    value: overallStats.percentage,
                                    className: "h-2",
                                    indicatorClassName: "bg-[#00a700]"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mt-1.5 text-xs text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 rounded-full",
                                                    style: {
                                                        backgroundColor: "#00a700"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this),
                                                overallStats.completed,
                                                " done"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 rounded-full",
                                                    style: {
                                                        backgroundColor: "#0292c0"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this),
                                                overallStats.available,
                                                " available"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 rounded-full",
                                                    style: {
                                                        backgroundColor: "#636363"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                overallStats.locked,
                                                " locked"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "w-4 h-4 text-yellow-500 fill-yellow-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-sm",
                                                    children: "Kappa Container"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-muted-foreground",
                                            children: [
                                                kappaStats.completed,
                                                "/",
                                                kappaStats.total
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                    value: kappaStats.percentage,
                                    className: "h-2",
                                    indicatorClassName: "bg-yellow-500"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1.5 text-xs text-muted-foreground",
                                    children: kappaStats.remaining > 0 ? `${kappaStats.remaining} Kappa quests remaining` : "All Kappa quests completed!"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium text-sm mb-3",
                                    children: "By Trader"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2.5 max-h-[200px] overflow-y-auto",
                                    children: traderStats.map((trader)=>{
                                        const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraderColor"])(trader.traderId);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            style: {
                                                                color: colors.primary
                                                            },
                                                            children: trader.traderName
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: [
                                                                trader.completed,
                                                                "/",
                                                                trader.total,
                                                                " (",
                                                                trader.percentage,
                                                                "%)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                                    value: trader.percentage,
                                                    className: "h-1.5",
                                                    indicatorClassName: "transition-all",
                                                    style: {
                                                        "--progress-color": colors.primary
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, trader.traderId, true, {
                                            fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                            lineNumber: 187,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/progress-stats/ProgressStats.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(ProgressStats, "8F4NvmaBlU2f6rLLFsBfwZqa+7I=");
_c = ProgressStats;
const __TURBOPACK__default__export__ = ProgressStats;
var _c;
__turbopack_context__.k.register(_c, "ProgressStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/progress-stats/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$progress$2d$stats$2f$ProgressStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/progress-stats/ProgressStats.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Base styles with inset shadow (Refactoring UI: "Emulate a light source")
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input h-9 w-full min-w-0 rounded-md border bg-[var(--bg-elevated)] px-3 py-1 text-base shadow-inset-input transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$label$40$2$2e$1$2e$8_40c2d5246712c6eaa4eeb3b25ed464ca$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-label@2.1.8_40c2d5246712c6eaa4eeb3b25ed464ca/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$label$40$2$2e$1$2e$8_40c2d5246712c6eaa4eeb3b25ed464ca$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/ui/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$switch$40$1$2e$2$2e$_893bb09b4174350b221c4552d522471a$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-switch@1.2._893bb09b4174350b221c4552d522471a/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Switch({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$switch$40$1$2e$2$2e$_893bb09b4174350b221c4552d522471a$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "switch",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$switch$40$1$2e$2$2e$_893bb09b4174350b221c4552d522471a$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
            "data-slot": "switch-thumb",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ui/switch.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/switch.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Switch;
;
var _c;
__turbopack_context__.k.register(_c, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/quest-tree/StatusMultiSelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusMultiSelect",
    ()=>StatusMultiSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/popover.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const STATUSES = [
    {
        value: "available",
        label: "Available",
        color: "#0292c0"
    },
    {
        value: "completed",
        label: "Completed",
        color: "#00a700"
    },
    {
        value: "locked",
        label: "Locked",
        color: "#636363"
    }
];
function StatusMultiSelect({ selectedStatuses, onChange }) {
    const handleToggle = (status)=>{
        const newStatuses = selectedStatuses.includes(status) ? selectedStatuses.filter((s)=>s !== status) : [
            ...selectedStatuses,
            status
        ];
        onChange(newStatuses);
    };
    const getLabel = ()=>{
        if (selectedStatuses.length === 0) return "All Status";
        if (selectedStatuses.length === 1) {
            return STATUSES.find((s)=>s.value === selectedStatuses[0])?.label;
        }
        return `Status (${selectedStatuses.length})`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    className: "h-9 min-w-[120px] justify-between gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "truncate",
                            children: getLabel()
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/StatusMultiSelect.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "h-4 w-4 shrink-0 opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/StatusMultiSelect.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/quest-tree/StatusMultiSelect.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/StatusMultiSelect.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                className: "w-[180px] p-2",
                align: "start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: STATUSES.map((status)=>{
                            const isSelected = selectedStatuses.includes(status.value);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handleToggle(status.value),
                                className: `flex items-center gap-2 w-full px-2 py-1.5 text-sm rounded transition-colors text-left ${isSelected ? "bg-primary/10 text-foreground" : "hover:bg-muted text-muted-foreground"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded-full shrink-0",
                                        style: {
                                            backgroundColor: status.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-tree/StatusMultiSelect.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-1",
                                        children: status.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-tree/StatusMultiSelect.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this),
                                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "h-4 w-4 shrink-0 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-tree/StatusMultiSelect.tsx",
                                        lineNumber: 75,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, status.value, true, {
                                fileName: "[project]/apps/web/src/components/quest-tree/StatusMultiSelect.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/StatusMultiSelect.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 pt-2 border-t",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onChange([]),
                            className: "w-full px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors",
                            children: "Clear selection (show all)"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/StatusMultiSelect.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/StatusMultiSelect.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-tree/StatusMultiSelect.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/quest-tree/StatusMultiSelect.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = StatusMultiSelect;
var _c;
__turbopack_context__.k.register(_c, "StatusMultiSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/quest-tree/ActiveFilterChips.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActiveFilterChips",
    ()=>ActiveFilterChips
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
"use client";
;
;
const STATUS_LABELS = {
    available: "Available",
    in_progress: "In Progress",
    completed: "Completed",
    locked: "Locked"
};
function Chip({ label, onRemove }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary",
        children: [
            label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onRemove,
                className: "hover:text-primary/80 transition-colors",
                "aria-label": `Remove ${label} filter`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "h-3 w-3"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/quest-tree/ActiveFilterChips.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/ActiveFilterChips.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/quest-tree/ActiveFilterChips.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = Chip;
function ActiveFilterChips({ filters, onRemoveFilter, onClearAll }) {
    const chips = [];
    // Status filters (one chip per status)
    filters.statuses.forEach((status)=>{
        chips.push({
            key: `status-${status}`,
            label: STATUS_LABELS[status],
            onRemove: ()=>onRemoveFilter("statuses", status)
        });
    });
    // Kappa filter
    if (filters.kappaOnly) {
        chips.push({
            key: "kappa",
            label: "Kappa Only",
            onRemove: ()=>onRemoveFilter("kappaOnly")
        });
    }
    // Player level (only if not default)
    if (filters.playerLevel && filters.playerLevel !== 1) {
        chips.push({
            key: "level",
            label: `Level ${filters.playerLevel}`,
            onRemove: ()=>onRemoveFilter("playerLevel")
        });
    }
    // Search is not shown as a chip (it's visible in the input)
    if (chips.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-muted-foreground",
                children: "Active:"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/ActiveFilterChips.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            chips.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                    label: chip.label,
                    onRemove: chip.onRemove
                }, chip.key, false, {
                    fileName: "[project]/apps/web/src/components/quest-tree/ActiveFilterChips.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onClearAll,
                className: "text-xs text-muted-foreground hover:text-foreground transition-colors ml-1",
                children: "Clear all"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/ActiveFilterChips.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/quest-tree/ActiveFilterChips.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_c1 = ActiveFilterChips;
var _c, _c1;
__turbopack_context__.k.register(_c, "Chip");
__turbopack_context__.k.register(_c1, "ActiveFilterChips");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/quest-tree/QuestFilters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @ts-nocheck - React 19 Input component type compatibility
__turbopack_context__.s([
    "QuestFilters",
    ()=>QuestFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$progress$2d$stats$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/progress-stats/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$progress$2d$stats$2f$ProgressStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/progress-stats/ProgressStats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserPrefs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useUserPrefs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$StatusMultiSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/StatusMultiSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$ActiveFilterChips$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/ActiveFilterChips.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function QuestFilters({ traders, quests, filters, onFilterChange, onApplyFilters }) {
    _s();
    const updatePrefsMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserPrefs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateUserPrefs"])();
    const [searchValue, setSearchValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(filters.search);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Stable ref for onApplyFilters to avoid infinite loops
    const onApplyFiltersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onApplyFilters);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestFilters.useEffect": ()=>{
            onApplyFiltersRef.current = onApplyFilters;
        }
    }["QuestFilters.useEffect"]);
    // Auto-save player level when it changes (debounced)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestFilters.useEffect": ()=>{
            const timer = setTimeout({
                "QuestFilters.useEffect.timer": ()=>{
                    if (filters.playerLevel !== undefined && filters.playerLevel !== null) {
                        updatePrefsMutation.mutate({
                            playerLevel: filters.playerLevel
                        });
                    }
                }
            }["QuestFilters.useEffect.timer"], 1000);
            return ({
                "QuestFilters.useEffect": ()=>clearTimeout(timer)
            })["QuestFilters.useEffect"];
        }
    }["QuestFilters.useEffect"], [
        filters.playerLevel
    ]); // mutation.mutate() is stable and doesn't need to be in deps
    // Debounce search input and auto-apply
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestFilters.useEffect": ()=>{
            const timer = setTimeout({
                "QuestFilters.useEffect.timer": ()=>{
                    if (searchValue !== filters.search) {
                        onFilterChange({
                            search: searchValue
                        });
                        // Use ref to avoid dependency on onApplyFilters
                        setTimeout({
                            "QuestFilters.useEffect.timer": ()=>onApplyFiltersRef.current()
                        }["QuestFilters.useEffect.timer"], 100);
                    }
                }
            }["QuestFilters.useEffect.timer"], 500);
            return ({
                "QuestFilters.useEffect": ()=>clearTimeout(timer)
            })["QuestFilters.useEffect"];
        }
    }["QuestFilters.useEffect"], [
        searchValue,
        filters.search,
        onFilterChange
    ]);
    // Keyboard shortcut: "/" to focus search input
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestFilters.useEffect": ()=>{
            const handleKeyDown = {
                "QuestFilters.useEffect.handleKeyDown": (e)=>{
                    // Don't trigger if user is typing in an input or textarea
                    const target = e.target;
                    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
                        return;
                    }
                    if (e.key === "/") {
                        e.preventDefault();
                        searchInputRef.current?.focus();
                    }
                }
            }["QuestFilters.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "QuestFilters.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["QuestFilters.useEffect"];
        }
    }["QuestFilters.useEffect"], []);
    const handleReset = ()=>{
        setSearchValue("");
        onFilterChange({
            statuses: [
                "available",
                "locked"
            ],
            search: "",
            kappaOnly: false,
            playerLevel: 1
        });
        setTimeout(()=>onApplyFiltersRef.current(), 0);
    };
    // Auto-apply filter change (immediate apply after state update)
    const handleFilterChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestFilters.useCallback[handleFilterChange]": (update)=>{
            onFilterChange(update);
            setTimeout({
                "QuestFilters.useCallback[handleFilterChange]": ()=>onApplyFiltersRef.current()
            }["QuestFilters.useCallback[handleFilterChange]"], 0);
        }
    }["QuestFilters.useCallback[handleFilterChange]"], [
        onFilterChange
    ]);
    // Debounced level change (auto-apply after 500ms)
    const levelChangeTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleLevelChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestFilters.useCallback[handleLevelChange]": (level)=>{
            onFilterChange({
                playerLevel: level
            });
            if (levelChangeTimerRef.current) {
                clearTimeout(levelChangeTimerRef.current);
            }
            levelChangeTimerRef.current = setTimeout({
                "QuestFilters.useCallback[handleLevelChange]": ()=>{
                    onApplyFiltersRef.current();
                }
            }["QuestFilters.useCallback[handleLevelChange]"], 500);
        }
    }["QuestFilters.useCallback[handleLevelChange]"], [
        onFilterChange
    ]);
    // Handle removal of individual filter from chips (auto-apply)
    const handleRemoveFilter = (key, value)=>{
        if (key === "statuses" && value) {
            const newStatuses = filters.statuses.filter((s)=>s !== value);
            handleFilterChange({
                statuses: newStatuses
            });
        } else if (key === "kappaOnly") {
            handleFilterChange({
                kappaOnly: false
            });
        } else if (key === "playerLevel") {
            handleFilterChange({
                playerLevel: 1
            });
        }
    };
    // Count all active filters (for chips and mobile badge)
    const activeFilterCount = [
        filters.statuses.length > 0 ? filters.statuses : null,
        filters.kappaOnly,
        filters.playerLevel !== 1 ? filters.playerLevel : null
    ].filter(Boolean).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background border-b",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 px-4 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "text",
                                    placeholder: "Search quests...",
                                    value: searchValue,
                                    onChange: (e)=>setSearchValue(e.target.value),
                                    className: "h-9"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                                open: mobileOpen,
                                onOpenChange: setMobileOpen,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            className: "relative h-9 px-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                    className: "h-4 w-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 17
                                                }, this),
                                                "Filters",
                                                activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center",
                                                    children: activeFilterCount
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                                        side: "bottom",
                                        className: "h-auto max-h-[85vh]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                                        children: "Filter Quests"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetDescription"], {
                                                        className: "sr-only",
                                                        children: "Filter quests by status, level, and more"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-4 space-y-4 overflow-y-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$StatusMultiSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusMultiSelect"], {
                                                                    selectedStatuses: filters.statuses,
                                                                    onChange: (statuses)=>handleFilterChange({
                                                                            statuses
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                htmlFor: "kappa-mobile",
                                                                className: "text-sm cursor-pointer",
                                                                children: "Kappa Required Only"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                                id: "kappa-mobile",
                                                                checked: filters.kappaOnly,
                                                                onCheckedChange: (checked)=>handleFilterChange({
                                                                        kappaOnly: checked
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                className: "text-sm",
                                                                children: "Player Level"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                type: "number",
                                                                min: 1,
                                                                max: 79,
                                                                placeholder: "1-79",
                                                                value: filters.playerLevel ?? "",
                                                                onChange: (e)=>{
                                                                    const val = parseInt(e.target.value);
                                                                    const level = isNaN(val) ? null : Math.min(79, Math.max(1, val));
                                                                    handleLevelChange(level);
                                                                },
                                                                className: "h-9 w-20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-4 border-t",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            onClick: handleReset,
                                                            children: "Reset All"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pb-2 overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$ActiveFilterChips$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActiveFilterChips"], {
                            filters: filters,
                            onRemoveFilter: handleRemoveFilter,
                            onClearAll: handleReset
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                            lineNumber: 256,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-2 flex items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[200px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            ref: searchInputRef,
                                            type: "text",
                                            placeholder: "Search quests... (press /)",
                                            value: searchValue,
                                            onChange: (e)=>setSearchValue(e.target.value),
                                            className: "h-9"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$StatusMultiSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusMultiSelect"], {
                                        selectedStatuses: filters.statuses,
                                        onChange: (statuses)=>handleFilterChange({
                                                statuses
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                id: "kappa-desktop",
                                                checked: filters.kappaOnly,
                                                onCheckedChange: (checked)=>handleFilterChange({
                                                        kappaOnly: checked
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "kappa-desktop",
                                                className: "text-sm cursor-pointer whitespace-nowrap",
                                                children: "Kappa"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                lineNumber: 297,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "player-level-desktop",
                                                className: "text-sm whitespace-nowrap",
                                                children: "Level:"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                lineNumber: 307,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "player-level-desktop",
                                                type: "number",
                                                min: 1,
                                                max: 79,
                                                placeholder: "1-79",
                                                value: filters.playerLevel ?? "",
                                                onChange: (e)=>{
                                                    const val = parseInt(e.target.value);
                                                    const level = isNaN(val) ? null : Math.min(79, Math.max(1, val));
                                                    handleLevelChange(level);
                                                },
                                                className: "h-9 w-16"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                                lineNumber: 313,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$progress$2d$stats$2f$ProgressStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressStats"], {
                                quests: quests,
                                traders: traders
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$ActiveFilterChips$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActiveFilterChips"], {
                            filters: filters,
                            onRemoveFilter: handleRemoveFilter,
                            onClearAll: handleReset
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                            lineNumber: 339,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                        lineNumber: 338,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/quest-tree/QuestFilters.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(QuestFilters, "saqPK+qULMohQrqdDG5dbk045lM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserPrefs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateUserPrefs"]
    ];
});
_c = QuestFilters;
var _c;
__turbopack_context__.k.register(_c, "QuestFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/ui/skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "skeleton",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-accent animate-pulse rounded-md", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/skeleton.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Skeleton;
;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestTreeSkeleton",
    ()=>QuestTreeSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/QuestNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/trader-colors.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
// Layout constants matching the real quest tree
const TRADER_NODE_WIDTH = 60;
const LANE_SPACING = 25;
const TRADER_TO_QUEST_GAP = 20;
const QUEST_HORIZONTAL_GAP = 80;
const QUEST_VERTICAL_GAP = 25;
// Skeleton edge styling
const EDGE_COLOR = "#4a4a4a";
// Skeleton lane data - mimics real trader lanes with varying quest counts
const SKELETON_LANES = [
    {
        name: "Prapor",
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRADER_COLORS"].prapor.primary,
        quests: [
            4,
            3,
            2,
            1
        ]
    },
    {
        name: "Therapist",
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRADER_COLORS"].therapist.primary,
        quests: [
            3,
            4,
            3,
            2
        ]
    },
    {
        name: "Skier",
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRADER_COLORS"].skier.primary,
        quests: [
            3,
            2,
            3,
            1
        ]
    },
    {
        name: "Peacekeeper",
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRADER_COLORS"].peacekeeper.primary,
        quests: [
            2,
            3,
            2
        ]
    }
];
function QuestTreeSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterBarSkeleton, {}, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-hidden relative bg-[#1a1a1a]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "absolute inset-0 w-full h-full pointer-events-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonEdges, {}, void 0, false, {
                                fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: SKELETON_LANES.map((lane, laneIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonLane, {
                                    lane: lane,
                                    laneIndex: laneIndex
                                }, lane.name, false, {
                                    fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = QuestTreeSkeleton;
function FilterBarSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center gap-3 p-3 bg-background border-b",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-[200px] max-w-[400px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-9 w-full rounded-md"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-9 w-[140px] rounded-md"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-9 w-[120px] rounded-md"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-9 w-[80px] rounded-md"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-9 w-[70px] rounded-md"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1 ml-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-8 w-8 rounded"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-8 w-8 rounded"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c1 = FilterBarSkeleton;
// Calculate cumulative Y position for each lane
function getLaneY(laneIndex) {
    let y = 0;
    for(let i = 0; i < laneIndex; i++){
        const maxNodes = Math.max(...SKELETON_LANES[i].quests);
        const height = maxNodes * (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_HEIGHT"] + QUEST_VERTICAL_GAP);
        y += height + LANE_SPACING;
    }
    return y;
}
function SkeletonLane({ lane, laneIndex }) {
    const maxNodesInColumn = Math.max(...lane.quests);
    const laneHeight = maxNodesInColumn * (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_HEIGHT"] + QUEST_VERTICAL_GAP);
    const laneY = getLaneY(laneIndex);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute flex",
        style: {
            top: laneY,
            left: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TraderNodeSkeleton, {
                color: lane.color,
                height: laneHeight
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                style: {
                    marginLeft: TRADER_TO_QUEST_GAP
                },
                children: lane.quests.map((nodeCount, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        style: {
                            marginLeft: colIndex > 0 ? QUEST_HORIZONTAL_GAP : 0,
                            gap: QUEST_VERTICAL_GAP
                        },
                        children: Array.from({
                            length: nodeCount
                        }).map((_, nodeIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuestNodeSkeleton, {}, nodeIndex, false, {
                                fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this))
                    }, colIndex, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c2 = SkeletonLane;
function TraderNodeSkeleton({ color, height }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded border-2 flex items-center justify-center bg-background",
        style: {
            width: TRADER_NODE_WIDTH,
            height: Math.max(height, 80),
            borderColor: color
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-2",
            style: {
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "w-3 rounded",
                    style: {
                        height: 60,
                        backgroundColor: `${color}40`
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "w-2 h-6 rounded"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c3 = TraderNodeSkeleton;
function QuestNodeSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded border-2 p-2 animate-pulse",
        style: {
            width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_WIDTH"],
            height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_HEIGHT"],
            borderColor: "#636363",
            backgroundColor: "#383945"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-3.5 w-[90%] mb-1.5 bg-[#4a4a4a]"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-3 w-[60%] mb-2 bg-[#4a4a4a]"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-3 w-8 rounded bg-[#4a4a4a]"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_c4 = QuestNodeSkeleton;
function SkeletonEdges() {
    // Generate edge paths based on skeleton lane structure
    const edges = [];
    let edgeId = 0;
    SKELETON_LANES.forEach((lane, laneIndex)=>{
        const laneY = getLaneY(laneIndex) + 24; // +24 for padding
        lane.quests.forEach((nodeCount, colIndex)=>{
            if (colIndex === lane.quests.length - 1) return; // No edges from last column
            const nextColNodeCount = lane.quests[colIndex + 1];
            const startX = 24 + // padding
            TRADER_NODE_WIDTH + TRADER_TO_QUEST_GAP + colIndex * (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_WIDTH"] + QUEST_HORIZONTAL_GAP) + __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_WIDTH"];
            const endX = startX + QUEST_HORIZONTAL_GAP;
            // Connect each node in current column to one or more in next column
            for(let i = 0; i < nodeCount; i++){
                const startY = laneY + i * (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_HEIGHT"] + QUEST_VERTICAL_GAP) + __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_HEIGHT"] / 2;
                // Connect to corresponding node(s) in next column
                const targetIndices = getTargetIndices(i, nodeCount, nextColNodeCount);
                for (const targetIndex of targetIndices){
                    const endY = laneY + targetIndex * (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_HEIGHT"] + QUEST_VERTICAL_GAP) + __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUEST_NODE_HEIGHT"] / 2;
                    // Bezier curve control points
                    const controlX = (startX + endX) / 2;
                    edges.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M ${startX} ${startY} C ${controlX} ${startY}, ${controlX} ${endY}, ${endX} ${endY}`,
                        stroke: EDGE_COLOR,
                        strokeWidth: 2,
                        fill: "none",
                        className: "animate-pulse",
                        style: {
                            animationDelay: `${edgeId * 50}ms`
                        }
                    }, edgeId++, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx",
                        lineNumber: 232,
                        columnNumber: 13
                    }, this));
                }
            }
        });
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: edges
    }, void 0, false);
}
_c5 = SkeletonEdges;
// Helper to determine which nodes in next column to connect to
function getTargetIndices(sourceIndex, sourceCount, targetCount) {
    if (targetCount === 0) return [];
    // Simple mapping strategy
    if (targetCount >= sourceCount) {
        // More targets - connect to corresponding index
        return [
            Math.min(sourceIndex, targetCount - 1)
        ];
    } else {
        // Fewer targets - multiple sources may connect to same target
        const targetIndex = Math.floor(sourceIndex / sourceCount * targetCount);
        return [
            Math.min(targetIndex, targetCount - 1)
        ];
    }
}
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "QuestTreeSkeleton");
__turbopack_context__.k.register(_c1, "FilterBarSkeleton");
__turbopack_context__.k.register(_c2, "SkeletonLane");
__turbopack_context__.k.register(_c3, "TraderNodeSkeleton");
__turbopack_context__.k.register(_c4, "QuestNodeSkeleton");
__turbopack_context__.k.register(_c5, "SkeletonEdges");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/quest-tree/SyncStatusIndicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SyncStatusIndicator",
    ()=>SyncStatusIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudOff$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/cloud-off.js [app-client] (ecmascript) <export default as CloudOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function formatRelativeTime(date) {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffSeconds < 5) {
        return "just now";
    } else if (diffSeconds < 60) {
        return `${diffSeconds}s ago`;
    } else if (diffMinutes < 60) {
        return `${diffMinutes}m ago`;
    } else if (diffHours < 24) {
        return `${diffHours}h ago`;
    } else {
        return date.toLocaleDateString();
    }
}
function SyncStatusIndicator({ lastSynced, isOnline, isSaving, pendingOfflineCount = 0 }) {
    _s();
    const [relativeTime, setRelativeTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Update relative time every 10 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SyncStatusIndicator.useEffect": ()=>{
            if (!lastSynced) return;
            const updateTime = {
                "SyncStatusIndicator.useEffect.updateTime": ()=>{
                    setRelativeTime(formatRelativeTime(lastSynced));
                }
            }["SyncStatusIndicator.useEffect.updateTime"];
            updateTime();
            const interval = setInterval(updateTime, 10000);
            return ({
                "SyncStatusIndicator.useEffect": ()=>clearInterval(interval)
            })["SyncStatusIndicator.useEffect"];
        }
    }["SyncStatusIndicator.useEffect"], [
        lastSynced
    ]);
    if (!isOnline) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 text-xs text-amber-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudOff$3e$__["CloudOff"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/quest-tree/SyncStatusIndicator.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        "Offline",
                        pendingOfflineCount > 0 && ` (${pendingOfflineCount} pending)`
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/quest-tree/SyncStatusIndicator.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/quest-tree/SyncStatusIndicator.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this);
    }
    // Show pending count even when online (syncing in progress)
    if (pendingOfflineCount > 0 && !isSaving) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 text-xs text-amber-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/quest-tree/SyncStatusIndicator.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        pendingOfflineCount,
                        " change",
                        pendingOfflineCount > 1 ? "s" : "",
                        " ",
                        "pending sync"
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/quest-tree/SyncStatusIndicator.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/quest-tree/SyncStatusIndicator.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this);
    }
    if (isSaving) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 text-xs text-muted-foreground",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-3.5 h-3.5 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/quest-tree/SyncStatusIndicator.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Saving..."
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/quest-tree/SyncStatusIndicator.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/quest-tree/SyncStatusIndicator.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this);
    }
    if (lastSynced) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 text-xs text-muted-foreground", relativeTime === "just now" && "text-green-500"),
            children: [
                relativeTime === "just now" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/quest-tree/SyncStatusIndicator.tsx",
                    lineNumber: 99,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/quest-tree/SyncStatusIndicator.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        "Synced ",
                        relativeTime
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/quest-tree/SyncStatusIndicator.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/quest-tree/SyncStatusIndicator.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this);
    }
    return null;
}
_s(SyncStatusIndicator, "sFFaeg4YL7px8qEIx2Ef4/2/EtE=");
_c = SyncStatusIndicator;
var _c;
__turbopack_context__.k.register(_c, "SyncStatusIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/quest-tree/QuestTypeMultiSelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestTypeMultiSelect",
    ()=>QuestTypeMultiSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/popover.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const QUEST_TYPES = [
    {
        value: "standard",
        label: "Standard"
    },
    {
        value: "pvp_zone",
        label: "PVP Zone"
    },
    {
        value: "reputation",
        label: "Reputation (Fence)"
    },
    {
        value: "lightkeeper",
        label: "Lightkeeper"
    },
    {
        value: "faction_bear",
        label: "BEAR Only"
    },
    {
        value: "faction_usec",
        label: "USEC Only"
    },
    {
        value: "story",
        label: "Story"
    },
    {
        value: "prestige",
        label: "Prestige"
    }
];
function QuestTypeMultiSelect({ selectedTypes, onChange }) {
    const handleToggle = (type)=>{
        const newTypes = selectedTypes.includes(type) ? selectedTypes.filter((t)=>t !== type) : [
            ...selectedTypes,
            type
        ];
        onChange(newTypes);
    };
    const getLabel = ()=>{
        if (selectedTypes.length === 0) return "All Types";
        if (selectedTypes.length === 1) {
            return QUEST_TYPES.find((t)=>t.value === selectedTypes[0])?.label;
        }
        return `Types (${selectedTypes.length})`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    className: "h-9 min-w-[120px] justify-between gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "truncate",
                            children: getLabel()
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/QuestTypeMultiSelect.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "h-4 w-4 shrink-0 opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/QuestTypeMultiSelect.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/quest-tree/QuestTypeMultiSelect.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTypeMultiSelect.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                className: "w-[200px] p-2",
                align: "start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: QUEST_TYPES.map((type)=>{
                            const isSelected = selectedTypes.includes(type.value);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handleToggle(type.value),
                                className: `flex items-center gap-2 w-full px-2 py-1.5 text-sm rounded transition-colors text-left ${isSelected ? "bg-primary/10 text-foreground" : "hover:bg-muted text-muted-foreground"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-1",
                                        children: type.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTypeMultiSelect.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this),
                                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "h-4 w-4 shrink-0 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTypeMultiSelect.tsx",
                                        lineNumber: 76,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, type.value, true, {
                                fileName: "[project]/apps/web/src/components/quest-tree/QuestTypeMultiSelect.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTypeMultiSelect.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 pt-2 border-t",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onChange([]),
                            className: "w-full px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors",
                            children: "Clear selection (show all)"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/QuestTypeMultiSelect.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-tree/QuestTypeMultiSelect.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-tree/QuestTypeMultiSelect.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/quest-tree/QuestTypeMultiSelect.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c = QuestTypeMultiSelect;
var _c;
__turbopack_context__.k.register(_c, "QuestTypeMultiSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/quest-tree/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestTree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/QuestTree.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/QuestNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$TraderNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/TraderNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/QuestFilters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestTreeSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$SyncStatusIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/SyncStatusIndicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestTypeMultiSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/QuestTypeMultiSelect.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_7bca654b4a165e2aaeb677b7be7d3cff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-dialog@1.1._7bca654b4a165e2aaeb677b7be7d3cff/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_7bca654b4a165e2aaeb677b7be7d3cff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_7bca654b4a165e2aaeb677b7be7d3cff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_7bca654b4a165e2aaeb677b7be7d3cff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_7bca654b4a165e2aaeb677b7be7d3cff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_7bca654b4a165e2aaeb677b7be7d3cff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_7bca654b4a165e2aaeb677b7be7d3cff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Refactoring UI: Modals use elevation-xl for maximum depth
                "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-elevation-xl duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_7bca654b4a165e2aaeb677b7be7d3cff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_7bca654b4a165e2aaeb677b7be7d3cff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_7bca654b4a165e2aaeb677b7be7d3cff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.2.7_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkipQuestDialog",
    ()=>SkipQuestDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/trader-colors.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function SkipQuestDialog({ open, onOpenChange, targetQuest, prerequisites, onConfirm, isLoading = false }) {
    if (!targetQuest) return null;
    // Group prerequisites by trader
    const byTrader = new Map();
    for (const prereq of prerequisites){
        const traderId = prereq.trader.id;
        if (!byTrader.has(traderId)) {
            byTrader.set(traderId, []);
        }
        byTrader.get(traderId).push(prereq);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-md max-h-[80vh] overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Skip to Quest"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: [
                                "Mark all prerequisite quests as completed to unlock",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: targetQuest.title
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                "?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                prerequisites.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground mb-3",
                            children: [
                                "The following ",
                                prerequisites.length,
                                " quest",
                                prerequisites.length > 1 ? "s" : "",
                                " will be marked as completed:"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: Array.from(byTrader.entries()).map(([traderId, quests])=>{
                                const traderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraderColor"])(traderId);
                                const traderName = quests[0].trader.name;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 rounded-full",
                                                    style: {
                                                        backgroundColor: traderColor.primary
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium text-muted-foreground",
                                                    children: traderName
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "secondary",
                                                    className: "text-xs",
                                                    children: quests.length
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                                            lineNumber: 70,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-1 ml-4",
                                            children: quests.map((quest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "text-sm flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 rounded-full",
                                                            style: {
                                                                backgroundColor: traderColor.primary
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 27
                                                        }, this),
                                                        quest.title,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: [
                                                                "Lv.",
                                                                quest.levelRequired
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, quest.id, true, {
                                                    fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                                            lineNumber: 82,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, traderId, true, {
                                    fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                                    lineNumber: 69,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-4 text-sm text-muted-foreground",
                    children: "This quest has no incomplete prerequisites. It should already be available!"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                    lineNumber: 105,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>onOpenChange(false),
                            disabled: isLoading,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onConfirm,
                            disabled: isLoading || prerequisites.length === 0,
                            children: isLoading ? "Completing..." : `Complete ${prerequisites.length} Quest${prerequisites.length !== 1 ? "s" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c = SkipQuestDialog;
var _c;
__turbopack_context__.k.register(_c, "SkipQuestDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/onboarding/WelcomeModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WelcomeModal",
    ()=>WelcomeModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js [app-client] (ecmascript) <export default as MousePointerClick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/keyboard.js [app-client] (ecmascript) <export default as Keyboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Focus$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/focus.js [app-client] (ecmascript) <export default as Focus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fast$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FastForward$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/fast-forward.js [app-client] (ecmascript) <export default as FastForward>");
"use client";
;
;
;
;
const tips = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"],
        title: "Click to Complete",
        description: "Click any quest to mark it as completed. Long-press on mobile for details."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Focus$3e$__["Focus"],
        title: "Focus Mode",
        description: "Double-click a quest to highlight its entire chain of prerequisites and dependents."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__["Keyboard"],
        title: "Keyboard Navigation",
        description: "Use arrow keys to navigate, Enter to complete, Space for details, F for focus."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"],
        title: "Smart Filters",
        description: "Filter by trader, status, or search. Set your PMC level to highlight available quests."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
        title: "Kappa Container",
        description: "Toggle Kappa-only mode to focus on quests required for the Kappa container."
    }
];
function WelcomeModal({ open, onOpenChange, onGetStarted, onCatchUp }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-md",
            showCloseButton: false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "h-6 w-6 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "text-xl",
                            children: "Welcome to EFT Quest Tracker"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: "Track your Escape from Tarkov quest progress across all traders."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-4 space-y-4",
                    children: tips.map((tip, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tip.icon, {
                                        className: "h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium",
                                            children: tip.title
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: tip.description
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    className: "flex-col gap-2 sm:flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onGetStarted,
                            className: "w-full",
                            children: "Start Fresh"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        onCatchUp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: onCatchUp,
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fast$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FastForward$3e$__["FastForward"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                "Already mid-wipe? Catch up"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/onboarding/WelcomeModal.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c = WelcomeModal;
var _c;
__turbopack_context__.k.register(_c, "WelcomeModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/onboarding/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$onboarding$2f$WelcomeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/onboarding/WelcomeModal.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/quest-detail/ObjectiveCounter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ObjectiveCounter",
    ()=>ObjectiveCounter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
"use client";
;
;
function ObjectiveCounter({ current, target, onIncrement, onDecrement, onComplete, disabled = false, isLoading = false }) {
    const isComplete = current >= target;
    const canDecrement = current > 0 && !disabled && !isLoading;
    const canIncrement = current < target && !disabled && !isLoading;
    const showCompleteButton = current < target && !disabled && !isLoading;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1.5",
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: (e)=>{
                    e.stopPropagation();
                    if (canDecrement) onDecrement();
                },
                disabled: !canDecrement,
                className: `
          w-8 h-8 flex items-center justify-center rounded border-2 transition-all
          ${canDecrement ? "border-muted-foreground/30 hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary" : "border-muted/30 text-muted/30 cursor-not-allowed"}
        `,
                "aria-label": "Decrement progress",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/quest-detail/ObjectiveCounter.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-detail/ObjectiveCounter.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
          text-sm font-medium min-w-[48px] text-center px-2 py-1 rounded
          ${isComplete ? "bg-primary/20 text-primary" : "bg-muted/50 text-foreground/80"}
        `,
                role: "spinbutton",
                "aria-valuenow": current,
                "aria-valuemin": 0,
                "aria-valuemax": target,
                "aria-label": `Progress: ${current} of ${target}`,
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-4 h-4 animate-spin mx-auto"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/quest-detail/ObjectiveCounter.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this) : `${current}/${target}`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-detail/ObjectiveCounter.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: (e)=>{
                    e.stopPropagation();
                    if (canIncrement) onIncrement();
                },
                disabled: !canIncrement,
                className: `
          w-8 h-8 flex items-center justify-center rounded border-2 transition-all
          ${canIncrement ? "border-muted-foreground/30 hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary" : "border-muted/30 text-muted/30 cursor-not-allowed"}
        `,
                "aria-label": "Increment progress",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/quest-detail/ObjectiveCounter.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-detail/ObjectiveCounter.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            showCompleteButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: (e)=>{
                    e.stopPropagation();
                    onComplete();
                },
                className: " ml-1 px-2 py-1 text-xs rounded border border-primary/30 hover:bg-primary/10 hover:border-primary text-primary/80 hover:text-primary transition-all flex items-center gap-1 ",
                "aria-label": "Mark as complete",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "w-3 h-3"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-detail/ObjectiveCounter.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        children: "Done"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-detail/ObjectiveCounter.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-detail/ObjectiveCounter.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this),
            isComplete && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "w-4 h-4 text-primary ml-1",
                "aria-label": "Completed"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-detail/ObjectiveCounter.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/quest-detail/ObjectiveCounter.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = ObjectiveCounter;
var _c;
__turbopack_context__.k.register(_c, "ObjectiveCounter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/tarkov-api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Client for fetching quest details from tarkov.dev GraphQL API
 */ __turbopack_context__.s([
    "clearQuestDetailsCache",
    ()=>clearQuestDetailsCache,
    "fetchQuestDetails",
    ()=>fetchQuestDetails
]);
const TARKOV_API_URL = "https://api.tarkov.dev/graphql";
// In-memory cache for quest details (session-scoped)
const questDetailsCache = new Map();
const QUEST_DETAILS_QUERY = `
query GetQuestDetails($id: ID!) {
  task(id: $id) {
    id
    name
    experience
    finishRewards {
      traderStanding {
        trader {
          name
        }
        standing
      }
      items {
        item {
          name
          shortName
          iconLink
        }
        count
      }
    }
    objectives {
      id
      type
      description
      ... on TaskObjectiveItem {
        item {
          name
          shortName
          iconLink
        }
        items {
          name
          shortName
          iconLink
        }
        count
        foundInRaid
      }
    }
    neededKeys {
      keys {
        name
        shortName
        iconLink
      }
      map {
        name
      }
    }
  }
}
`;
async function fetchQuestDetails(questId) {
    // Check cache first
    const cached = questDetailsCache.get(questId);
    if (cached) {
        return cached;
    }
    try {
        const response = await fetch(TARKOV_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: QUEST_DETAILS_QUERY,
                variables: {
                    id: questId
                }
            })
        });
        if (!response.ok) {
            console.error(`Tarkov API error: ${response.status}`);
            return null;
        }
        const result = await response.json();
        if (result.errors) {
            console.error("Tarkov API GraphQL errors:", result.errors);
            return null;
        }
        const details = result.data?.task;
        // Cache successful result
        if (details) {
            questDetailsCache.set(questId, details);
        }
        return details;
    } catch (error) {
        console.error("Failed to fetch quest details from tarkov.dev:", error);
        return null;
    }
}
function clearQuestDetailsCache() {
    questDetailsCache.clear();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useQuestDetails.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuestDetails",
    ()=>useQuestDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$tarkov$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/tarkov-api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useQuestDetails(questId) {
    _s();
    const [details, setDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQuestDetails.useCallback[fetch]": async ()=>{
            if (!questId) {
                setDetails(null);
                return;
            }
            setLoading(true);
            setError(null);
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$tarkov$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchQuestDetails"])(questId);
                if (result) {
                    setDetails(result);
                } else {
                    setError("Quest details not found");
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch details");
            } finally{
                setLoading(false);
            }
        }
    }["useQuestDetails.useCallback[fetch]"], [
        questId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useQuestDetails.useEffect": ()=>{
            fetch();
        }
    }["useQuestDetails.useEffect"], [
        fetch
    ]);
    return {
        details,
        loading,
        error,
        refetch: fetch
    };
}
_s(useQuestDetails, "T5gppscc/JI1zNznSfKapokfztI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestDetailModal",
    ()=>QuestDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/key.js [app-client] (ecmascript) <export default as Key>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$detail$2f$ObjectiveCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-detail/ObjectiveCounter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useIsMobile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useQuestDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useQuestDetails.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/trader-colors.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
// Helper to extract item objectives that require turning in items
function getItemObjectives(objectives) {
    return objectives.filter((obj)=>(obj.type === "giveItem" || obj.type === "findQuestItem") && (obj.item || obj.items && obj.items.length > 0));
}
// Helper to check if an objective is completed (supports both binary and numeric)
function isObjectiveCompleted(objective, objectiveStates, numericObjectiveStates) {
    const progress = objective.progress?.[0];
    const isNumeric = progress?.target !== null && progress?.target !== undefined && progress.target > 0;
    if (isNumeric && progress && progress.target !== null) {
        const target = progress.target; // Narrowed to number by the checks above
        // Check local numeric state first
        if (numericObjectiveStates[objective.id] !== undefined) {
            return numericObjectiveStates[objective.id] >= target;
        }
        // Fall back to server state
        return (progress?.current ?? 0) >= target;
    }
    // Binary objective: check local state first
    if (objectiveStates[objective.id] !== undefined) {
        return objectiveStates[objective.id];
    }
    // Fall back to server state
    return progress?.completed ?? false;
}
// Helper to get current numeric progress
function getNumericProgress(objective, numericObjectiveStates) {
    // Check local state first (optimistic updates)
    if (numericObjectiveStates[objective.id] !== undefined) {
        return numericObjectiveStates[objective.id];
    }
    // Fall back to server state
    return objective.progress?.[0]?.current ?? 0;
}
function QuestDetailContent({ quest, details, detailsLoading, detailsError, onStatusChange, onObjectiveToggle, isSaving, onOpenChange, objectiveStates, numericObjectiveStates, onLocalObjectiveToggle, onLocalNumericUpdate, savingObjectives }) {
    const statusColor = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_COLORS"][quest.computedStatus];
    const isLocked = quest.computedStatus === "locked";
    const canToggleObjectives = !isLocked && !!onObjectiveToggle;
    // Calculate objective progress
    const completedCount = quest.objectives.filter((obj)=>isObjectiveCompleted(obj, objectiveStates, numericObjectiveStates)).length;
    const totalCount = quest.objectives.length;
    // Group objectives by map
    const objectivesByMap = quest.objectives.reduce((acc, obj)=>{
        const map = obj.map || "Any Location";
        if (!acc[map]) acc[map] = [];
        acc[map].push(obj);
        return acc;
    }, {});
    // Get unique maps for display
    const maps = Object.keys(objectivesByMap);
    // Get prerequisite quests
    const prerequisites = quest.dependsOn || [];
    // Extract required items from objectives
    const itemObjectives = details ? getItemObjectives(details.objectives) : [];
    // Check if there are rewards
    const hasRewards = details && (details.experience > 0 || details.finishRewards.items.length > 0 || details.finishRewards.traderStanding.length > 0);
    // Check for needed keys
    const hasKeys = details && details.neededKeys && details.neededKeys.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "outline",
                        style: {
                            borderColor: statusColor.primary,
                            color: statusColor.primary
                        },
                        children: quest.computedStatus.replace("_", " ")
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "secondary",
                        children: [
                            "Level ",
                            quest.levelRequired
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    quest.kappaRequired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        style: {
                            backgroundColor: "#FFD700",
                            color: "#000"
                        },
                        className: "font-bold",
                        children: "Kappa Required"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this),
                    details && details.experience > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "secondary",
                        children: [
                            details.experience.toLocaleString(),
                            " XP"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            itemObjectives.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this),
                            "Required Items (",
                            itemObjectives.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2",
                        children: itemObjectives.map((obj)=>{
                            const item = obj.item || obj.items?.[0];
                            if (!item) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-3 text-sm",
                                children: [
                                    item.iconLink && // eslint-disable-next-line @next/next/no-img-element
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: item.iconLink,
                                        alt: item.shortName,
                                        className: "w-8 h-8 object-contain bg-muted rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                        lineNumber: 233,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-foreground/90",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                lineNumber: 240,
                                                columnNumber: 21
                                            }, this),
                                            obj.count && obj.count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground ml-1",
                                                children: [
                                                    "x",
                                                    obj.count
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                lineNumber: 242,
                                                columnNumber: 23
                                            }, this),
                                            obj.foundInRaid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "outline",
                                                className: "ml-2 text-xs py-0",
                                                children: "FIR"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                lineNumber: 247,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                        lineNumber: 239,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, obj.id, true, {
                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                lineNumber: 230,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                lineNumber: 220,
                columnNumber: 9
            }, this),
            hasKeys && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__["Key"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            "Required Keys (",
                            details.neededKeys.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2",
                        children: details.neededKeys.map((keyReq, idx)=>keyReq.keys.map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-3 text-sm",
                                    children: [
                                        key.iconLink && // eslint-disable-next-line @next/next/no-img-element
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: key.iconLink,
                                            alt: key.shortName,
                                            className: "w-8 h-8 object-contain bg-muted rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                            lineNumber: 275,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-foreground/90",
                                                    children: key.name
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 21
                                                }, this),
                                                keyReq.map && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground ml-2",
                                                    children: [
                                                        "(",
                                                        keyReq.map.name,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                            lineNumber: 281,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, `${idx}-${key.shortName}`, true, {
                                    fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                    lineNumber: 269,
                                    columnNumber: 17
                                }, this)))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                lineNumber: 261,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this),
                            "Objectives (",
                            completedCount,
                            "/",
                            totalCount,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    totalCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-1.5 bg-muted rounded-full overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-primary transition-all duration-300",
                                style: {
                                    width: `${completedCount / totalCount * 100}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                lineNumber: 306,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                            lineNumber: 305,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 304,
                        columnNumber: 11
                    }, this),
                    quest.objectives.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: maps.map((map)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-3 h-3 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                lineNumber: 320,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-muted-foreground",
                                                children: map
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                lineNumber: 321,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                        lineNumber: 319,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: objectivesByMap[map].map((obj)=>{
                                            const isCompleted = isObjectiveCompleted(obj, objectiveStates, numericObjectiveStates);
                                            const isSavingThis = savingObjectives.has(obj.id);
                                            const objProgress = obj.progress?.[0];
                                            const isNumeric = objProgress?.target !== null && objProgress?.target !== undefined && objProgress.target > 0;
                                            const currentProgress = isNumeric ? getNumericProgress(obj, numericObjectiveStates) : 0;
                                            // For numeric objectives, render counter instead of checkbox
                                            if (isNumeric && objProgress && objProgress.target !== null) {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: `flex items-start gap-2 text-sm leading-relaxed py-1 -mx-2 px-2 rounded ${isCompleted ? "text-muted-foreground" : "text-foreground/90"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `flex-1 ${isCompleted ? "line-through" : ""}`,
                                                            children: obj.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$detail$2f$ObjectiveCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectiveCounter"], {
                                                            current: currentProgress,
                                                            target: objProgress.target,
                                                            disabled: !canToggleObjectives,
                                                            isLoading: isSavingThis,
                                                            onIncrement: ()=>{
                                                                if (!canToggleObjectives || isSavingThis || !objProgress || objProgress.target === null) return;
                                                                const newValue = Math.min(currentProgress + 1, objProgress.target);
                                                                onLocalNumericUpdate(obj.id, newValue);
                                                                onObjectiveToggle?.(obj.id, {
                                                                    current: newValue
                                                                });
                                                            },
                                                            onDecrement: ()=>{
                                                                if (!canToggleObjectives || isSavingThis) return;
                                                                const newValue = Math.max(currentProgress - 1, 0);
                                                                onLocalNumericUpdate(obj.id, newValue);
                                                                onObjectiveToggle?.(obj.id, {
                                                                    current: newValue
                                                                });
                                                            },
                                                            onComplete: ()=>{
                                                                if (!canToggleObjectives || isSavingThis || objProgress?.target === null) return;
                                                                onLocalNumericUpdate(obj.id, objProgress.target);
                                                                onObjectiveToggle?.(obj.id, {
                                                                    current: objProgress.target
                                                                });
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, obj.id, true, {
                                                    fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 25
                                                }, this);
                                            }
                                            // Binary objective - render checkbox
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: `flex items-start gap-2 text-sm leading-relaxed ${canToggleObjectives ? "cursor-pointer hover:bg-muted/50 -mx-2 px-2 py-1 rounded" : ""} ${isCompleted ? "text-muted-foreground" : "text-foreground/90"}`,
                                                onClick: canToggleObjectives && !isSavingThis ? ()=>{
                                                    const newCompleted = !isCompleted;
                                                    onLocalObjectiveToggle(obj.id, newCompleted);
                                                    onObjectiveToggle?.(obj.id, newCompleted);
                                                } : undefined,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "shrink-0 mt-0.5",
                                                        children: isSavingThis ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "w-4 h-4 animate-spin text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                            lineNumber: 433,
                                                            columnNumber: 29
                                                        }, this) : isCompleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                                            className: `w-4 h-4 ${canToggleObjectives ? "text-primary" : "text-muted-foreground"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                            lineNumber: 435,
                                                            columnNumber: 29
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                                            className: `w-4 h-4 ${canToggleObjectives ? "text-muted-foreground hover:text-primary" : "text-muted-foreground/50"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                            lineNumber: 439,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                        lineNumber: 431,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: isCompleted ? "line-through" : "",
                                                        children: obj.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, obj.id, true, {
                                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                lineNumber: 413,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                        lineNumber: 325,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, map, true, {
                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                lineNumber: 318,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground italic",
                        children: "No objectives listed"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 456,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            detailsLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-sm text-muted-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-4 h-4 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 465,
                        columnNumber: 11
                    }, this),
                    "Loading rewards..."
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                lineNumber: 464,
                columnNumber: 9
            }, this),
            detailsError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-sm text-destructive",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 471,
                        columnNumber: 11
                    }, this),
                    detailsError
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                lineNumber: 470,
                columnNumber: 9
            }, this),
            hasRewards && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                lineNumber: 478,
                                columnNumber: 13
                            }, this),
                            "Rewards"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 477,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            details.finishRewards.traderStanding.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: details.finishRewards.traderStanding.map((standing, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: standing.standing >= 0 ? "secondary" : "destructive",
                                        className: "text-xs",
                                        children: [
                                            standing.trader.name,
                                            " ",
                                            standing.standing >= 0 ? "+" : "",
                                            standing.standing.toFixed(2)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                        lineNumber: 486,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                lineNumber: 484,
                                columnNumber: 15
                            }, this),
                            details.finishRewards.items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: details.finishRewards.items.map((reward, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-3 text-sm",
                                        children: [
                                            reward.item.iconLink && // eslint-disable-next-line @next/next/no-img-element
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: reward.item.iconLink,
                                                alt: reward.item.shortName,
                                                className: "w-8 h-8 object-contain bg-muted rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                lineNumber: 506,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-foreground/90",
                                                children: [
                                                    reward.item.name,
                                                    reward.count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground ml-1",
                                                        children: [
                                                            "x",
                                                            reward.count.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                                lineNumber: 512,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                        lineNumber: 503,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                lineNumber: 501,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 481,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                lineNumber: 476,
                columnNumber: 9
            }, this),
            prerequisites.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                lineNumber: 532,
                                columnNumber: 13
                            }, this),
                            "Prerequisites (",
                            prerequisites.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 531,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2",
                        children: prerequisites.map((dep)=>{
                            const prereqTraderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraderColor"])(dep.requiredQuest.traderId);
                            const requirementText = dep.requirementStatus.includes("complete") ? "Complete" : dep.requirementStatus.includes("active") ? "Have Active" : dep.requirementStatus.join(", ");
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full shrink-0",
                                        style: {
                                            backgroundColor: prereqTraderColor.primary
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                        lineNumber: 551,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-foreground/90",
                                        children: dep.requiredQuest.title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                        lineNumber: 555,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: [
                                            "(",
                                            requirementText,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                        lineNumber: 558,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, dep.requiredQuest.id, true, {
                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                lineNumber: 547,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 535,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                lineNumber: 530,
                columnNumber: 9
            }, this),
            quest.dependedOnBy && quest.dependedOnBy.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                lineNumber: 572,
                                columnNumber: 13
                            }, this),
                            "Unlocks (",
                            quest.dependedOnBy.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 571,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2",
                        children: quest.dependedOnBy.map((dep)=>{
                            const depTraderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraderColor"])(dep.dependentQuest.traderId);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full shrink-0",
                                        style: {
                                            backgroundColor: depTraderColor.primary
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                        lineNumber: 585,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-foreground/90",
                                        children: dep.dependentQuest.title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                        lineNumber: 589,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, dep.dependentQuest.id, true, {
                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                lineNumber: 581,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 575,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                lineNumber: 570,
                columnNumber: 9
            }, this),
            quest.computedStatus !== "locked" && onStatusChange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-2 border-t",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "default",
                            size: "sm",
                            className: "flex-1",
                            disabled: isSaving,
                            onClick: async ()=>{
                                await onStatusChange(quest.id);
                                onOpenChange?.(false);
                            },
                            children: [
                                isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-4 h-4 mr-2 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                    lineNumber: 615,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "w-4 h-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                    lineNumber: 617,
                                    columnNumber: 17
                                }, this),
                                quest.computedStatus === "completed" ? "Mark Available" : "Complete Quest"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                            lineNumber: 604,
                            columnNumber: 13
                        }, this),
                        quest.wikiLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            className: "flex-1",
                            onClick: ()=>window.open(quest.wikiLink, "_blank", "noopener,noreferrer"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    className: "w-4 h-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                    lineNumber: 634,
                                    columnNumber: 17
                                }, this),
                                "View Wiki"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                            lineNumber: 626,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                    lineNumber: 602,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                lineNumber: 601,
                columnNumber: 9
            }, this),
            quest.computedStatus !== "locked" && !onStatusChange && quest.wikiLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-2 border-t",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    className: "w-full",
                    onClick: ()=>window.open(quest.wikiLink, "_blank", "noopener,noreferrer"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                            className: "w-4 h-4 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                            lineNumber: 655,
                            columnNumber: 15
                        }, this),
                        "View on Tarkov Wiki"
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                    lineNumber: 647,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                lineNumber: 646,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_c = QuestDetailContent;
function QuestDetailModal({ quest, open, onOpenChange, onStatusChange, onObjectiveToggle, isSaving }) {
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    // Fetch extended details from tarkov.dev when modal opens
    const { details, loading: detailsLoading, error: detailsError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useQuestDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuestDetails"])(open && quest ? quest.id : null);
    // Local state for optimistic updates on objectives (binary)
    const [objectiveStates, setObjectiveStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Local state for numeric objectives
    const [numericObjectiveStates, setNumericObjectiveStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [savingObjectives, setSavingObjectives] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    // Reset local state when quest changes or modal closes
    const handleOpenChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestDetailModal.useCallback[handleOpenChange]": (newOpen)=>{
            if (!newOpen) {
                setObjectiveStates({});
                setNumericObjectiveStates({});
                setSavingObjectives(new Set());
            }
            onOpenChange(newOpen);
        }
    }["QuestDetailModal.useCallback[handleOpenChange]"], [
        onOpenChange
    ]);
    // Handle local objective toggle with optimistic update (binary)
    const handleLocalObjectiveToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestDetailModal.useCallback[handleLocalObjectiveToggle]": (objectiveId, completed)=>{
            setObjectiveStates({
                "QuestDetailModal.useCallback[handleLocalObjectiveToggle]": (prev)=>({
                        ...prev,
                        [objectiveId]: completed
                    })
            }["QuestDetailModal.useCallback[handleLocalObjectiveToggle]"]);
            setSavingObjectives({
                "QuestDetailModal.useCallback[handleLocalObjectiveToggle]": (prev)=>new Set(prev).add(objectiveId)
            }["QuestDetailModal.useCallback[handleLocalObjectiveToggle]"]);
        }
    }["QuestDetailModal.useCallback[handleLocalObjectiveToggle]"], []);
    // Handle local numeric update with optimistic update
    const handleLocalNumericUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestDetailModal.useCallback[handleLocalNumericUpdate]": (objectiveId, current)=>{
            setNumericObjectiveStates({
                "QuestDetailModal.useCallback[handleLocalNumericUpdate]": (prev)=>({
                        ...prev,
                        [objectiveId]: current
                    })
            }["QuestDetailModal.useCallback[handleLocalNumericUpdate]"]);
            setSavingObjectives({
                "QuestDetailModal.useCallback[handleLocalNumericUpdate]": (prev)=>new Set(prev).add(objectiveId)
            }["QuestDetailModal.useCallback[handleLocalNumericUpdate]"]);
        }
    }["QuestDetailModal.useCallback[handleLocalNumericUpdate]"], []);
    // Wrap the onObjectiveToggle to handle saving state
    const handleObjectiveToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestDetailModal.useCallback[handleObjectiveToggle]": async (objectiveId, update)=>{
            if (!onObjectiveToggle) return {
                questStatusChanged: false
            };
            try {
                const result = await onObjectiveToggle(objectiveId, update);
                return result;
            } finally{
                setSavingObjectives({
                    "QuestDetailModal.useCallback[handleObjectiveToggle]": (prev)=>{
                        const next = new Set(prev);
                        next.delete(objectiveId);
                        return next;
                    }
                }["QuestDetailModal.useCallback[handleObjectiveToggle]"]);
            }
        }
    }["QuestDetailModal.useCallback[handleObjectiveToggle]"], [
        onObjectiveToggle
    ]);
    if (!quest) return null;
    const traderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraderColor"])(quest.traderId);
    // Use Sheet (drawer) on mobile, Dialog on desktop
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
            open: open,
            onOpenChange: handleOpenChange,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                side: "bottom",
                className: "max-h-[85vh] overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                        className: "text-left pb-4 border-b",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full",
                                        style: {
                                            backgroundColor: traderColor.primary
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                        lineNumber: 755,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium text-muted-foreground",
                                        children: quest.trader.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                        lineNumber: 759,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                lineNumber: 754,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                className: "text-lg",
                                children: quest.title
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                lineNumber: 763,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetDescription"], {
                                className: "sr-only",
                                children: [
                                    "Quest details for ",
                                    quest.title
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                lineNumber: 764,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 753,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuestDetailContent, {
                            quest: quest,
                            details: details,
                            detailsLoading: detailsLoading,
                            detailsError: detailsError,
                            onStatusChange: onStatusChange,
                            onObjectiveToggle: handleObjectiveToggle,
                            isSaving: isSaving,
                            onOpenChange: handleOpenChange,
                            objectiveStates: objectiveStates,
                            numericObjectiveStates: numericObjectiveStates,
                            onLocalObjectiveToggle: handleLocalObjectiveToggle,
                            onLocalNumericUpdate: handleLocalNumericUpdate,
                            savingObjectives: savingObjectives
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                            lineNumber: 769,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                        lineNumber: 768,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                lineNumber: 752,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
            lineNumber: 751,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: handleOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-lg max-h-[85vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "pb-4 border-b",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3 h-3 rounded-full",
                                    style: {
                                        backgroundColor: traderColor.primary
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                    lineNumber: 795,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium text-muted-foreground",
                                    children: quest.trader.name
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                                    lineNumber: 799,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                            lineNumber: 794,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "text-lg",
                            children: quest.title
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                            lineNumber: 803,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            className: "sr-only",
                            children: [
                                "Quest details for ",
                                quest.title
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                            lineNumber: 804,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                    lineNumber: 793,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuestDetailContent, {
                    quest: quest,
                    details: details,
                    detailsLoading: detailsLoading,
                    detailsError: detailsError,
                    onStatusChange: onStatusChange,
                    onObjectiveToggle: handleObjectiveToggle,
                    isSaving: isSaving,
                    onOpenChange: handleOpenChange,
                    objectiveStates: objectiveStates,
                    numericObjectiveStates: numericObjectiveStates,
                    onLocalObjectiveToggle: handleLocalObjectiveToggle,
                    onLocalNumericUpdate: handleLocalNumericUpdate,
                    savingObjectives: savingObjectives
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
                    lineNumber: 808,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
            lineNumber: 792,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx",
        lineNumber: 791,
        columnNumber: 5
    }, this);
}
_s(QuestDetailModal, "aUZr41hZirMwcz9S6tPpNCzedbU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useQuestDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuestDetails"]
    ];
});
_c1 = QuestDetailModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "QuestDetailContent");
__turbopack_context__.k.register(_c1, "QuestDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/quest-detail/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$detail$2f$QuestDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/catch-up-algorithm.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Catch-up algorithm for detecting sibling terminal branches
 *
 * Given a set of "target quests" (quests the user is currently on), this algorithm:
 * 1. Finds all prerequisites for those quests (required to be completed)
 * 2. Detects terminal quest branches that share ancestors with the selected quests
 *    (these are sibling branches that likely ended before the user's current position)
 */ __turbopack_context__.s([
    "calculateCatchUp",
    ()=>calculateCatchUp,
    "collectAncestors",
    ()=>collectAncestors,
    "collectDescendants",
    ()=>collectDescendants,
    "getBranchQuestIds",
    ()=>getBranchQuestIds,
    "getChainLength",
    ()=>getChainLength,
    "getCompletedBranches",
    ()=>getCompletedBranches,
    "getPrerequisitesForSelection",
    ()=>getPrerequisitesForSelection,
    "groupByTrader",
    ()=>groupByTrader
]);
/**
 * Build a map of quest IDs to quests for efficient lookup
 */ function buildQuestMap(quests) {
    const map = new Map();
    for (const quest of quests){
        map.set(quest.id, quest);
    }
    return map;
}
function collectAncestors(questId, questMap, visited = new Set()) {
    if (visited.has(questId)) return visited;
    const quest = questMap.get(questId);
    if (!quest) return visited;
    visited.add(questId);
    for (const dep of quest.dependsOn || []){
        const prereqId = dep.requiredQuest?.id;
        if (prereqId) {
            collectAncestors(prereqId, questMap, visited);
        }
    }
    return visited;
}
function collectDescendants(questId, questMap, visited = new Set()) {
    if (visited.has(questId)) return visited;
    const quest = questMap.get(questId);
    if (!quest) return visited;
    visited.add(questId);
    for (const dep of quest.dependedOnBy || []){
        const dependentId = dep.dependentQuest?.id;
        if (dependentId) {
            collectDescendants(dependentId, questMap, visited);
        }
    }
    return visited;
}
/**
 * Check if a quest is terminal (has no dependents)
 */ function isTerminal(quest) {
    return !quest.dependedOnBy || quest.dependedOnBy.length === 0;
}
function getChainLength(questId, questMap) {
    const ancestors = collectAncestors(questId, questMap);
    return ancestors.size - 1; // Exclude the quest itself
}
/**
 * Convert a quest to a CatchUpSelection
 */ function questToSelection(quest, questMap) {
    return {
        questId: quest.id,
        questTitle: quest.title,
        traderId: quest.traderId,
        traderName: quest.trader?.name || "Unknown",
        traderColor: quest.trader?.color || "#888888",
        levelRequired: quest.levelRequired,
        chainLength: getChainLength(quest.id, questMap)
    };
}
function getPrerequisitesForSelection(targetQuestIds, quests) {
    const questMap = buildQuestMap(quests);
    const allPrereqs = new Set();
    // Collect all prerequisites for all target quests
    for (const targetId of targetQuestIds){
        const ancestors = collectAncestors(targetId, questMap);
        ancestors.delete(targetId); // Don't include the target quest itself
        for (const ancestorId of ancestors){
            allPrereqs.add(ancestorId);
        }
    }
    // Convert to selections
    const selections = [];
    for (const prereqId of allPrereqs){
        const quest = questMap.get(prereqId);
        if (quest) {
            selections.push(questToSelection(quest, questMap));
        }
    }
    // Sort by chain length (shorter chains first)
    return selections.sort((a, b)=>(a.chainLength ?? 0) - (b.chainLength ?? 0));
}
function getCompletedBranches(targetQuestIds, quests) {
    const questMap = buildQuestMap(quests);
    const targetSet = new Set(targetQuestIds);
    // Step 1: Collect all ancestors of target quests
    const allAncestors = new Set();
    for (const targetId of targetQuestIds){
        const ancestors = collectAncestors(targetId, questMap);
        for (const ancestorId of ancestors){
            allAncestors.add(ancestorId);
        }
    }
    // Step 2: Collect all descendants of target quests (to exclude)
    const allDescendants = new Set();
    for (const targetId of targetQuestIds){
        const descendants = collectDescendants(targetId, questMap);
        for (const descendantId of descendants){
            allDescendants.add(descendantId);
        }
    }
    // Step 3: Find terminal quests that branch off from shared ancestors
    const completedBranches = [];
    for (const quest of quests){
        // Skip non-terminal quests
        if (!isTerminal(quest)) continue;
        // Skip target quests themselves
        if (targetSet.has(quest.id)) continue;
        // Skip ancestors of target quests (they're prerequisites, not siblings)
        if (allAncestors.has(quest.id)) continue;
        // Skip descendants of target quests
        if (allDescendants.has(quest.id)) continue;
        // Check if this terminal quest shares an ancestor with any target quest
        const questAncestors = collectAncestors(quest.id, questMap);
        let sharesAncestor = false;
        for (const ancestorId of questAncestors){
            if (allAncestors.has(ancestorId)) {
                sharesAncestor = true;
                break;
            }
        }
        if (sharesAncestor) {
            const selection = questToSelection(quest, questMap);
            // Mark as auto-checked if level requirement is at or below player level
            completedBranches.push(selection);
        }
    }
    // Sort by level required, then by trader name
    return completedBranches.sort((a, b)=>{
        const aLevel = a.levelRequired ?? 0;
        const bLevel = b.levelRequired ?? 0;
        if (aLevel !== bLevel) {
            return aLevel - bLevel;
        }
        const aName = a.traderName ?? "";
        const bName = b.traderName ?? "";
        return aName.localeCompare(bName);
    });
}
function calculateCatchUp(targetQuestIds, quests) {
    return {
        targetQuests: getPrerequisitesForSelection(targetQuestIds, quests),
        siblingBranches: getCompletedBranches(targetQuestIds, quests),
        ancestors: [],
        blockedQuests: []
    };
}
function getBranchQuestIds(terminalQuestId, quests) {
    const questMap = buildQuestMap(quests);
    const ancestors = collectAncestors(terminalQuestId, questMap);
    return Array.from(ancestors);
}
function groupByTrader(selections) {
    const groups = new Map();
    for (const selection of selections){
        const existing = groups.get(selection.traderId) || [];
        existing.push(selection);
        groups.set(selection.traderId, existing);
    }
    return groups;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/ui/checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
const Checkbox = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, onCheckedChange, onChange, ...props }, ref)=>{
    const handleChange = (e)=>{
        onChange?.(e);
        onCheckedChange?.(e.target.checked);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 rounded border border-[var(--tactical-border)] bg-[var(--bg-card)]", "text-[var(--accent-gold)] focus:ring-[var(--accent-gold)] focus:ring-offset-0", "cursor-pointer transition-colors", "checked:bg-[var(--accent-gold)] checked:border-[var(--accent-gold)]", className),
        ref: ref,
        onChange: handleChange,
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/checkbox.tsx",
        lineNumber: 18,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Checkbox;
Checkbox.displayName = "Checkbox";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Checkbox$React.forwardRef");
__turbopack_context__.k.register(_c1, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TraderQuestGroup",
    ()=>TraderQuestGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TraderQuestGroup({ traderName, traderColor, quests, showCheckboxes = false, checkedQuests, onToggleQuest, defaultExpanded = true }) {
    _s();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultExpanded);
    const checkedCount = showCheckboxes && checkedQuests ? quests.filter((q)=>checkedQuests.has(q.questId)).length : quests.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-[var(--tactical-border)] rounded-md overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setExpanded(!expanded),
                className: "w-full flex items-center justify-between p-3 bg-[var(--bg-elevated)] hover:bg-[var(--bg-panel)] transition-colors",
                "aria-expanded": expanded,
                "aria-label": `${traderName} quests, ${expanded ? "collapse" : "expand"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "h-4 w-4 text-[var(--text-secondary)]"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "h-4 w-4 text-[var(--text-secondary)]"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            style: {
                                color: traderColor
                            },
                            children: traderName
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-[var(--text-dim)]",
                            children: [
                                "(",
                                checkedCount,
                                "/",
                                quests.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divide-y divide-[var(--tactical-border)]",
                children: quests.map((quest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 p-3 bg-[var(--bg-card)]",
                        children: [
                            showCheckboxes && checkedQuests && onToggleQuest ? // @ts-ignore React 19 forwardRef type compatibility
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                id: `quest-${quest.questId}`,
                                checked: checkedQuests.has(quest.questId),
                                onCheckedChange: ()=>onToggleQuest(quest.questId)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx",
                                lineNumber: 67,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-4 rounded border border-[var(--tactical-border)] bg-[var(--success)]/20 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-3 h-3 text-[var(--success)]",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M5 13l4 4L19 7"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx",
                                        lineNumber: 80,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx",
                                    lineNumber: 74,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx",
                                lineNumber: 73,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: showCheckboxes ? `quest-${quest.questId}` : undefined,
                                className: "flex-1 text-sm text-[var(--text-bright)] cursor-pointer",
                                children: quest.questTitle
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-[var(--text-dim)]",
                                children: [
                                    "Lv. ",
                                    quest.levelRequired
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this)
                        ]
                    }, quest.questId, true, {
                        fileName: "[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(TraderQuestGroup, "Oe0RblL+MHZQ50IhWCwh27MpZCs=");
_c = TraderQuestGroup;
var _c;
__turbopack_context__.k.register(_c, "TraderQuestGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @ts-nocheck - React 19 Input component type compatibility
__turbopack_context__.s([
    "CatchUpDialog",
    ()=>CatchUpDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/trader-colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$catch$2d$up$2d$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/catch-up-algorithm.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$catch$2d$up$2f$TraderQuestGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/sonner@2.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function CatchUpDialog({ open, onOpenChange, quests, onComplete, existingProgressCount = 0 }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("select");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedQuests, setSelectedQuests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [playerLevel, setPlayerLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [confirmedBranches, setConfirmedBranches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Reset state when dialog closes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CatchUpDialog.useEffect": ()=>{
            if (!open) {
                setStep("select");
                setSearchQuery("");
                setSelectedQuests([]);
                setPlayerLevel(null);
                setConfirmedBranches(new Set());
            }
        }
    }["CatchUpDialog.useEffect"], [
        open
    ]);
    // Calculate catch-up data when we have selections and player level
    const catchUpData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CatchUpDialog.useMemo[catchUpData]": ()=>{
            if (selectedQuests.length === 0 || playerLevel === null) return null;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$catch$2d$up$2d$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateCatchUp"])(selectedQuests.map({
                "CatchUpDialog.useMemo[catchUpData]": (q)=>q.id
            }["CatchUpDialog.useMemo[catchUpData]"]), quests);
        }
    }["CatchUpDialog.useMemo[catchUpData]"], [
        selectedQuests,
        quests,
        playerLevel
    ]);
    // Initialize confirmed branches when catch-up data changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CatchUpDialog.useEffect": ()=>{
            if (catchUpData && playerLevel !== null) {
                const autoChecked = new Set();
                for (const branch of catchUpData.completedBranches){
                    if (branch.levelRequired <= playerLevel) {
                        autoChecked.add(branch.questId);
                    }
                }
                setConfirmedBranches(autoChecked);
            }
        }
    }["CatchUpDialog.useEffect"], [
        catchUpData,
        playerLevel
    ]);
    // Filter quests based on search query
    const searchResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CatchUpDialog.useMemo[searchResults]": ()=>{
            if (!searchQuery.trim()) return [];
            const lowerQuery = searchQuery.toLowerCase();
            const selectedIds = new Set(selectedQuests.map({
                "CatchUpDialog.useMemo[searchResults]": (q)=>q.id
            }["CatchUpDialog.useMemo[searchResults]"]));
            return quests.filter({
                "CatchUpDialog.useMemo[searchResults]": (q)=>q.title.toLowerCase().includes(lowerQuery) && !selectedIds.has(q.id)
            }["CatchUpDialog.useMemo[searchResults]"]).sort({
                "CatchUpDialog.useMemo[searchResults]": (a, b)=>{
                    const aExact = a.title.toLowerCase() === lowerQuery;
                    const bExact = b.title.toLowerCase() === lowerQuery;
                    if (aExact && !bExact) return -1;
                    if (!aExact && bExact) return 1;
                    return a.levelRequired - b.levelRequired;
                }
            }["CatchUpDialog.useMemo[searchResults]"]).slice(0, 20);
        }
    }["CatchUpDialog.useMemo[searchResults]"], [
        searchQuery,
        quests,
        selectedQuests
    ]);
    const handleSelectQuest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CatchUpDialog.useCallback[handleSelectQuest]": (quest)=>{
            setSelectedQuests({
                "CatchUpDialog.useCallback[handleSelectQuest]": (prev)=>[
                        ...prev,
                        quest
                    ]
            }["CatchUpDialog.useCallback[handleSelectQuest]"]);
            setSearchQuery("");
            searchInputRef.current?.focus();
        }
    }["CatchUpDialog.useCallback[handleSelectQuest]"], []);
    const handleRemoveQuest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CatchUpDialog.useCallback[handleRemoveQuest]": (questId)=>{
            setSelectedQuests({
                "CatchUpDialog.useCallback[handleRemoveQuest]": (prev)=>prev.filter({
                        "CatchUpDialog.useCallback[handleRemoveQuest]": (q)=>q.id !== questId
                    }["CatchUpDialog.useCallback[handleRemoveQuest]"])
            }["CatchUpDialog.useCallback[handleRemoveQuest]"]);
        }
    }["CatchUpDialog.useCallback[handleRemoveQuest]"], []);
    const handlePlayerLevelChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CatchUpDialog.useCallback[handlePlayerLevelChange]": (value)=>{
            const num = parseInt(value, 10);
            if (value === "") {
                setPlayerLevel(null);
            } else if (!isNaN(num) && num >= 1 && num <= 79) {
                setPlayerLevel(num);
            }
        }
    }["CatchUpDialog.useCallback[handlePlayerLevelChange]"], []);
    const handleToggleBranch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CatchUpDialog.useCallback[handleToggleBranch]": (questId)=>{
            setConfirmedBranches({
                "CatchUpDialog.useCallback[handleToggleBranch]": (prev)=>{
                    const next = new Set(prev);
                    if (next.has(questId)) {
                        next.delete(questId);
                    } else {
                        next.add(questId);
                    }
                    return next;
                }
            }["CatchUpDialog.useCallback[handleToggleBranch]"]);
        }
    }["CatchUpDialog.useCallback[handleToggleBranch]"], []);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CatchUpDialog.useCallback[handleNext]": ()=>{
            if (step === "select") {
                if (existingProgressCount > 0) {
                    setStep("confirm-reset");
                } else {
                    setStep("review");
                }
            } else if (step === "confirm-reset") {
                setStep("review");
            }
        }
    }["CatchUpDialog.useCallback[handleNext]"], [
        step,
        existingProgressCount
    ]);
    const handleBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CatchUpDialog.useCallback[handleBack]": ()=>{
            if (step === "review") {
                if (existingProgressCount > 0) {
                    setStep("confirm-reset");
                } else {
                    setStep("select");
                }
            } else if (step === "confirm-reset") {
                setStep("select");
            }
        }
    }["CatchUpDialog.useCallback[handleBack]"], [
        step,
        existingProgressCount
    ]);
    const handleCatchUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CatchUpDialog.useCallback[handleCatchUp]": async ()=>{
            if (selectedQuests.length === 0 || playerLevel === null) return;
            setIsLoading(true);
            try {
                const response = await fetch("/api/progress/catch-up", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        targetQuests: selectedQuests.map({
                            "CatchUpDialog.useCallback[handleCatchUp]": (q)=>q.id
                        }["CatchUpDialog.useCallback[handleCatchUp]"]),
                        playerLevel,
                        confirmedBranches: Array.from(confirmedBranches)
                    })
                });
                if (!response.ok) {
                    const data = await response.json();
                    throw new Error(data.error || "Failed to catch up progress");
                }
                const data = await response.json();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Progress synced!", {
                    description: `Completed ${data.completed.length} prerequisite quests${data.completedBranches?.length > 0 ? ` and ${data.completedBranches.length} branch quests` : ""}.`
                });
                onComplete();
                onOpenChange(false);
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to sync", {
                    description: error instanceof Error ? error.message : "Please try again."
                });
            } finally{
                setIsLoading(false);
            }
        }
    }["CatchUpDialog.useCallback[handleCatchUp]"], [
        selectedQuests,
        playerLevel,
        confirmedBranches,
        onComplete,
        onOpenChange
    ]);
    const canProceed = selectedQuests.length > 0 && playerLevel !== null;
    // Group prerequisites and branches by trader for display
    const prerequisitesByTrader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CatchUpDialog.useMemo[prerequisitesByTrader]": ()=>{
            if (!catchUpData) return new Map();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$catch$2d$up$2d$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupByTrader"])(catchUpData.prerequisites);
        }
    }["CatchUpDialog.useMemo[prerequisitesByTrader]"], [
        catchUpData
    ]);
    const branchesByTrader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CatchUpDialog.useMemo[branchesByTrader]": ()=>{
            if (!catchUpData) return new Map();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$catch$2d$up$2d$algorithm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupByTrader"])(catchUpData.completedBranches);
        }
    }["CatchUpDialog.useMemo[branchesByTrader]"], [
        catchUpData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-lg max-h-[85vh] flex flex-col overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: [
                                step === "select" && "Catch Up Progress",
                                step === "confirm-reset" && "Progress Reset Warning",
                                step === "review" && "Review Catch-Up"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: [
                                step === "select" && "Select the quests you're currently working on and enter your PMC level.",
                                step === "confirm-reset" && "This will reset your existing progress before applying the catch-up.",
                                step === "review" && "Review the quests that will be marked as completed."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col gap-4 py-2 min-h-0 overflow-hidden",
                    children: [
                        step === "select" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium mb-1.5 block",
                                            children: "Your PMC Level"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "number",
                                            min: 1,
                                            max: 79,
                                            value: playerLevel ?? "",
                                            onChange: (e)=>handlePlayerLevelChange(e.target.value),
                                            placeholder: "Enter level (1-79)",
                                            className: "w-32"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            ref: searchInputRef,
                                            value: searchQuery,
                                            onChange: (e)=>setSearchQuery(e.target.value),
                                            placeholder: "Search quests...",
                                            className: "pl-9"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                            lineNumber: 270,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, this),
                                searchQuery.trim() && searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border rounded-md max-h-48 overflow-y-auto shrink-0",
                                    children: searchResults.map((quest)=>{
                                        const traderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraderColor"])(quest.traderId);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleSelectQuest(quest),
                                            className: "w-full px-3 py-2 text-left hover:bg-muted flex items-center gap-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 rounded-full shrink-0",
                                                    style: {
                                                        backgroundColor: traderColor.primary
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1 truncate",
                                                    children: quest.title
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground shrink-0",
                                                    children: [
                                                        "Lv ",
                                                        quest.levelRequired
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, quest.id, true, {
                                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                            lineNumber: 285,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                    lineNumber: 281,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto min-h-0",
                                    children: selectedQuests.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    "Selected quests (",
                                                    selectedQuests.length,
                                                    "):"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                lineNumber: 309,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: selectedQuests.map((quest)=>{
                                                    const traderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trader$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraderColor"])(quest.traderId);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 p-2 bg-muted/50 rounded-md text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2 h-2 rounded-full shrink-0",
                                                                style: {
                                                                    backgroundColor: traderColor.primary
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex-1 truncate",
                                                                children: quest.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-muted-foreground shrink-0",
                                                                children: [
                                                                    "Lv ",
                                                                    quest.levelRequired
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handleRemoveQuest(quest.id),
                                                                className: "p-1 hover:bg-muted rounded-sm",
                                                                "aria-label": `Remove ${quest.title}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                                    lineNumber: 336,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, quest.id, true, {
                                                        fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                lineNumber: 312,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                        lineNumber: 308,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8 text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "h-8 w-8 mx-auto mb-2 opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                lineNumber: 345,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                children: "Search for quests you're currently working on"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                lineNumber: 346,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                        lineNumber: 344,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        step === "confirm-reset" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center py-8 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "h-12 w-12 text-yellow-500"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                    lineNumber: 358,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium",
                                            children: [
                                                "You have ",
                                                existingProgressCount,
                                                " quest",
                                                existingProgressCount !== 1 ? "s" : "",
                                                " marked complete."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Continuing will reset all existing progress and apply the new catch-up state. This cannot be undone."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                    lineNumber: 359,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this),
                        step === "review" && catchUpData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    className: "h-4 w-4 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-medium",
                                                    children: "Prerequisites"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: [
                                                        "(",
                                                        catchUpData.prerequisites.length,
                                                        " quests)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mb-2",
                                            children: "These quests must be completed to reach your selected quests."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                            lineNumber: 384,
                                            columnNumber: 17
                                        }, this),
                                        catchUpData.prerequisites.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: Array.from(prerequisitesByTrader.entries()).map(([traderId, selections])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$catch$2d$up$2f$TraderQuestGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TraderQuestGroup"], {
                                                    traderId: traderId,
                                                    traderName: selections[0].traderName,
                                                    traderColor: selections[0].traderColor,
                                                    quests: selections,
                                                    locked: true
                                                }, traderId, false, {
                                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                            lineNumber: 388,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground italic",
                                            children: "No prerequisites needed."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                            lineNumber: 403,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, this),
                                catchUpData.completedBranches.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "h-4 w-4 text-green-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-medium",
                                                    children: "Completed Branches"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: [
                                                        "(",
                                                        catchUpData.completedBranches.length,
                                                        " terminal quests)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                            lineNumber: 412,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mb-2",
                                            children: "These quest chains ended before your current position. Check the ones you've completed."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                            lineNumber: 419,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: Array.from(branchesByTrader.entries()).map(([traderId, selections])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$catch$2d$up$2f$TraderQuestGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TraderQuestGroup"], {
                                                    traderId: traderId,
                                                    traderName: selections[0].traderName,
                                                    traderColor: selections[0].traderColor,
                                                    quests: selections,
                                                    showCheckboxes: true,
                                                    checkedIds: confirmedBranches,
                                                    onToggle: handleToggleBranch,
                                                    playerLevel: playerLevel
                                                }, traderId, false, {
                                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                            lineNumber: 423,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                    lineNumber: 411,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                            lineNumber: 374,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                    lineNumber: 247,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    className: "flex-row justify-between sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: step !== "select" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: handleBack,
                                disabled: isLoading,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "h-4 w-4 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                        lineNumber: 454,
                                        columnNumber: 17
                                    }, this),
                                    "Back"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                lineNumber: 449,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                            lineNumber: 447,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>onOpenChange(false),
                                    disabled: isLoading,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                    lineNumber: 460,
                                    columnNumber: 13
                                }, this),
                                step === "review" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleCatchUp,
                                    disabled: isLoading || !canProceed,
                                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-4 w-4 animate-spin mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                lineNumber: 474,
                                                columnNumber: 21
                                            }, this),
                                            "Syncing..."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "h-4 w-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                                lineNumber: 479,
                                                columnNumber: 21
                                            }, this),
                                            "Apply Catch-Up"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                    lineNumber: 468,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleNext,
                                    disabled: !canProceed,
                                    children: "Next"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                                    lineNumber: 485,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                            lineNumber: 459,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
                    lineNumber: 446,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
            lineNumber: 230,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx",
        lineNumber: 229,
        columnNumber: 5
    }, this);
}
_s(CatchUpDialog, "eYkZNScBnYrDslB5tHOX7sCBHXk=");
_c = CatchUpDialog;
var _c;
__turbopack_context__.k.register(_c, "CatchUpDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/catch-up/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$catch$2d$up$2f$CatchUpDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$catch$2d$up$2f$TraderQuestGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/catch-up/TraderQuestGroup.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useQuests.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuestProgress",
    ()=>useQuestProgress,
    "useQuests",
    ()=>useQuests
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
// Simple request deduplication - tracks in-flight requests
const inflightRequests = new Map();
async function fetchWithDedup(url) {
    // Check if there's already an in-flight request for this URL
    const existing = inflightRequests.get(url);
    if (existing) {
        return existing;
    }
    // Create new request
    const request = fetch(url);
    inflightRequests.set(url, request);
    try {
        const response = await request;
        // Return a clone so the original can still be consumed
        return response.clone();
    } finally{
        // Clean up after request completes (success or failure)
        inflightRequests.delete(url);
    }
}
const defaultFilters = {
    traderId: null,
    statuses: [
        "available",
        "locked"
    ],
    search: "",
    kappaOnly: false,
    map: null,
    playerLevel: 1,
    questsPerTree: null,
    bypassLevelRequirement: false,
    questType: null,
    hideReputationQuests: false
};
function useQuests(options) {
    _s();
    // Merge initial filters with defaults (only computed once on mount)
    const mergedInitialFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useQuests.useMemo[mergedInitialFilters]": ()=>({
                ...defaultFilters,
                ...options?.initialFilters ?? {}
            })
    }["useQuests.useMemo[mergedInitialFilters]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    [] // Empty deps - only compute once on mount
    );
    const [quests, setQuests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allQuests, setAllQuests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // Unfiltered for depth calc
    const [traders, setTraders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [initialLoading, setInitialLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // Only true during first load
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingFilters, setPendingFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mergedInitialFilters);
    const [appliedFilters, setAppliedFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mergedInitialFilters);
    // Ref to store pending filters for stable applyFilters callback
    const pendingFiltersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(pendingFilters);
    pendingFiltersRef.current = pendingFilters;
    const fetchTraders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQuests.useCallback[fetchTraders]": async ()=>{
            try {
                const res = await fetchWithDedup("/api/traders");
                if (!res.ok) throw new Error("Failed to fetch traders");
                const data = await res.json();
                setTraders(data.traders);
            } catch (err) {
                console.error("Error fetching traders:", err);
            }
        }
    }["useQuests.useCallback[fetchTraders]"], []);
    // Fetch all quests (unfiltered) for accurate depth calculation
    const fetchAllQuests = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQuests.useCallback[fetchAllQuests]": async ()=>{
            try {
                const res = await fetchWithDedup("/api/quests");
                if (!res.ok) throw new Error("Failed to fetch all quests");
                const data = await res.json();
                setAllQuests(data.quests);
            } catch (err) {
                console.error("Error fetching all quests:", err);
            }
        }
    }["useQuests.useCallback[fetchAllQuests]"], []);
    const fetchQuests = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQuests.useCallback[fetchQuests]": async ()=>{
            setLoading(true);
            setError(null);
            try {
                const params = new URLSearchParams();
                if (appliedFilters.kappaOnly) params.set("kappa", "true");
                if (appliedFilters.search) params.set("search", appliedFilters.search);
                const url = `/api/quests?${params.toString()}`;
                const res = await fetchWithDedup(url);
                if (!res.ok) throw new Error("Failed to fetch quests");
                const data = await res.json();
                // Client-side filtering
                let filteredQuests = data.quests;
                // Trader filtering
                if (appliedFilters.traderId) {
                    filteredQuests = filteredQuests.filter({
                        "useQuests.useCallback[fetchQuests]": (q)=>q.traderId === appliedFilters.traderId
                    }["useQuests.useCallback[fetchQuests]"]);
                }
                // Status filtering (multi-select: empty array = all)
                if (appliedFilters.statuses.length > 0) {
                    filteredQuests = filteredQuests.filter({
                        "useQuests.useCallback[fetchQuests]": (q)=>appliedFilters.statuses.includes(q.computedStatus)
                    }["useQuests.useCallback[fetchQuests]"]);
                }
                setQuests(filteredQuests);
                setInitialLoading(false); // First load complete
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
                setInitialLoading(false); // Also mark initial load complete on error
            } finally{
                setLoading(false);
            }
        }
    }["useQuests.useCallback[fetchQuests]"], [
        appliedFilters
    ]);
    const setFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQuests.useCallback[setFilters]": (newFilters)=>{
            // Update ref synchronously so applyFilters() can read the latest value immediately
            const updated = {
                ...pendingFiltersRef.current,
                ...newFilters
            };
            pendingFiltersRef.current = updated;
            setPendingFilters(updated);
        }
    }["useQuests.useCallback[setFilters]"], []);
    const applyFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQuests.useCallback[applyFilters]": ()=>{
            setAppliedFilters(pendingFiltersRef.current);
        }
    }["useQuests.useCallback[applyFilters]"], []);
    const hasPendingChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useQuests.useMemo[hasPendingChanges]": ()=>{
            return JSON.stringify(pendingFilters) !== JSON.stringify(appliedFilters);
        }
    }["useQuests.useMemo[hasPendingChanges]"], [
        pendingFilters,
        appliedFilters
    ]);
    const refetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQuests.useCallback[refetch]": async ()=>{
            // Refetch both filtered quests and all quests to keep them in sync
            // This ensures allQuests (used for skip dialog prerequisites) has fresh data
            await Promise.all([
                fetchQuests(),
                fetchAllQuests()
            ]);
        }
    }["useQuests.useCallback[refetch]"], [
        fetchQuests,
        fetchAllQuests
    ]);
    // Track if initial fetch has been done
    const initialFetchDone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Initial fetch - run once on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useQuests.useEffect": ()=>{
            if (initialFetchDone.current) return;
            initialFetchDone.current = true;
            // Fetch traders, all quests, and filtered quests in parallel
            Promise.all([
                fetchTraders(),
                fetchAllQuests(),
                fetchQuests()
            ]);
        }
    }["useQuests.useEffect"], [
        fetchTraders,
        fetchAllQuests,
        fetchQuests
    ]);
    // Re-fetch filtered quests when filters change (but skip initial mount)
    const isFirstRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useQuests.useEffect": ()=>{
            if (isFirstRender.current) {
                isFirstRender.current = false;
                return;
            }
            fetchQuests();
        }
    }["useQuests.useEffect"], [
        fetchQuests
    ]);
    return {
        quests,
        allQuests,
        traders,
        loading,
        initialLoading,
        error,
        filters: pendingFilters,
        setFilters,
        applyFilters,
        hasPendingChanges,
        refetch
    };
}
_s(useQuests, "DsnXVFvAKmb0VK3Rsm9zZRHMo2E=");
function useQuestProgress() {
    _s1();
    const [updating, setUpdating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const updateStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQuestProgress.useCallback[updateStatus]": async (questId, status)=>{
            setUpdating(true);
            try {
                const res = await fetch("/api/progress", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        questId,
                        status
                    })
                });
                if (!res.ok) {
                    const data = await res.json();
                    throw new Error(data.error || "Failed to update progress");
                }
                return true;
            } catch (err) {
                console.error("Error updating progress:", err);
                return false;
            } finally{
                setUpdating(false);
            }
        }
    }["useQuestProgress.useCallback[updateStatus]"], []);
    return {
        updateStatus,
        updating
    };
}
_s1(useQuestProgress, "EX0vAvZKBPbLglhCe4EfeDbHSSw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useProgress.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProgress",
    ()=>useProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$30_nex_5cd500642f96487cf75b316aefb401ff$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.30_nex_5cd500642f96487cf75b316aefb401ff/node_modules/next-auth/react.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// LocalStorage key for offline queue
const OFFLINE_QUEUE_KEY = "eft-tracker-offline-queue";
// Load offline queue from localStorage
function loadOfflineQueue() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const stored = localStorage.getItem(OFFLINE_QUEUE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch  {
        return [];
    }
}
// Save offline queue to localStorage
function saveOfflineQueue(queue) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(OFFLINE_QUEUE_KEY, JSON.stringify(queue));
    } catch  {
    // Ignore storage errors
    }
}
function useProgress() {
    _s();
    const { status: sessionStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$30_nex_5cd500642f96487cf75b316aefb401ff$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [unlockedQuests, setUnlockedQuests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [savingQuestIds, setSavingQuestIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [lastSynced, setLastSynced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isOnline, setIsOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [pendingOfflineCount, setPendingOfflineCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Track previous state for rollback
    const previousProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    // Debounce tracking - prevent rapid clicks on same quest
    const recentlyUpdated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Offline queue
    const offlineQueue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(loadOfflineQueue());
    // Track if we're currently processing the offline queue
    const processingQueue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Process offline queue when coming back online
    const processOfflineQueue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProgress.useCallback[processOfflineQueue]": async ()=>{
            if (processingQueue.current || offlineQueue.current.length === 0) return;
            if (sessionStatus !== "authenticated") return;
            processingQueue.current = true;
            // Process queue items one at a time
            while(offlineQueue.current.length > 0 && navigator.onLine){
                const update = offlineQueue.current[0];
                try {
                    const res = await fetch(`/api/progress/${update.questId}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            status: update.status.toUpperCase()
                        })
                    });
                    if (res.ok) {
                        // Remove from queue on success
                        offlineQueue.current.shift();
                        saveOfflineQueue(offlineQueue.current);
                        setPendingOfflineCount(offlineQueue.current.length);
                        setLastSynced(new Date());
                    } else {
                        break;
                    }
                } catch  {
                    break;
                }
            }
            processingQueue.current = false;
        }
    }["useProgress.useCallback[processOfflineQueue]"], [
        sessionStatus
    ]);
    // Track online/offline status
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProgress.useEffect": ()=>{
            const handleOnline = {
                "useProgress.useEffect.handleOnline": ()=>{
                    setIsOnline(true);
                    // Process offline queue when coming back online
                    processOfflineQueue();
                }
            }["useProgress.useEffect.handleOnline"];
            const handleOffline = {
                "useProgress.useEffect.handleOffline": ()=>setIsOnline(false)
            }["useProgress.useEffect.handleOffline"];
            // Set initial state
            setIsOnline(navigator.onLine);
            // Initialize pending count from stored queue
            setPendingOfflineCount(offlineQueue.current.length);
            window.addEventListener("online", handleOnline);
            window.addEventListener("offline", handleOffline);
            return ({
                "useProgress.useEffect": ()=>{
                    window.removeEventListener("online", handleOnline);
                    window.removeEventListener("offline", handleOffline);
                }
            })["useProgress.useEffect"];
        }
    }["useProgress.useEffect"], [
        processOfflineQueue
    ]);
    // Process queue on mount if online
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProgress.useEffect": ()=>{
            if (isOnline && sessionStatus === "authenticated") {
                processOfflineQueue();
            }
        }
    }["useProgress.useEffect"], [
        isOnline,
        sessionStatus,
        processOfflineQueue
    ]);
    const fetchProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProgress.useCallback[fetchProgress]": async ()=>{
            if (sessionStatus !== "authenticated") {
                setIsLoading(false);
                return;
            }
            setIsLoading(true);
            setError(null);
            try {
                const res = await fetch("/api/progress");
                if (!res.ok) {
                    if (res.status === 401) {
                        // Not authenticated, clear progress
                        setProgress(new Map());
                        return;
                    }
                    throw new Error("Failed to fetch progress");
                }
                const data = await res.json();
                const progressMap = new Map();
                for (const entry of data.progress){
                    progressMap.set(entry.questId, entry.status.toLowerCase());
                }
                setProgress(progressMap);
                setLastSynced(new Date());
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
            } finally{
                setIsLoading(false);
            }
        }
    }["useProgress.useCallback[fetchProgress]"], [
        sessionStatus
    ]);
    const updateStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProgress.useCallback[updateStatus]": async (questId, newStatus)=>{
            if (sessionStatus !== "authenticated") {
                setError("Please sign in to track progress");
                return false;
            }
            // Debounce: prevent rapid clicks on same quest (300ms cooldown)
            if (recentlyUpdated.current.has(questId)) {
                return false;
            }
            recentlyUpdated.current.add(questId);
            setTimeout({
                "useProgress.useCallback[updateStatus]": ()=>recentlyUpdated.current.delete(questId)
            }["useProgress.useCallback[updateStatus]"], 300);
            // Save current state for potential rollback
            previousProgress.current = new Map(progress);
            // Mark quest as saving
            setSavingQuestIds({
                "useProgress.useCallback[updateStatus]": (prev)=>new Set(prev).add(questId)
            }["useProgress.useCallback[updateStatus]"]);
            // Optimistic update
            setProgress({
                "useProgress.useCallback[updateStatus]": (prev)=>{
                    const next = new Map(prev);
                    next.set(questId, newStatus);
                    return next;
                }
            }["useProgress.useCallback[updateStatus]"]);
            // If offline, queue the update for later
            if (!navigator.onLine) {
                // Add to offline queue (replace any existing update for this quest)
                const existingIndex = offlineQueue.current.findIndex({
                    "useProgress.useCallback[updateStatus].existingIndex": (u)=>u.questId === questId
                }["useProgress.useCallback[updateStatus].existingIndex"]);
                const queuedUpdate = {
                    questId,
                    status: newStatus,
                    timestamp: Date.now()
                };
                if (existingIndex >= 0) {
                    offlineQueue.current[existingIndex] = queuedUpdate;
                } else {
                    offlineQueue.current.push(queuedUpdate);
                }
                saveOfflineQueue(offlineQueue.current);
                setPendingOfflineCount(offlineQueue.current.length);
                // Remove from saving set
                setSavingQuestIds({
                    "useProgress.useCallback[updateStatus]": (prev)=>{
                        const next = new Set(prev);
                        next.delete(questId);
                        return next;
                    }
                }["useProgress.useCallback[updateStatus]"]);
                // Return true because we've queued it (optimistic update stays)
                return true;
            }
            try {
                const res = await fetch(`/api/progress/${questId}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        status: newStatus.toUpperCase()
                    })
                });
                if (!res.ok) {
                    const data = await res.json();
                    throw new Error(data.error || "Failed to update progress");
                }
                const data = await res.json();
                // Handle auto-unlocked quests
                if (data.unlockedQuests && data.unlockedQuests.length > 0) {
                    setUnlockedQuests({
                        "useProgress.useCallback[updateStatus]": (prev)=>[
                                ...prev,
                                ...data.unlockedQuests
                            ]
                    }["useProgress.useCallback[updateStatus]"]);
                    // Update progress for unlocked quests
                    setProgress({
                        "useProgress.useCallback[updateStatus]": (prev)=>{
                            const next = new Map(prev);
                            for (const unlockedId of data.unlockedQuests){
                                next.set(unlockedId, "available");
                            }
                            return next;
                        }
                    }["useProgress.useCallback[updateStatus]"]);
                }
                // Handle auto-locked quests (when prerequisites are unchecked)
                if (data.lockedQuests && data.lockedQuests.length > 0) {
                    setProgress({
                        "useProgress.useCallback[updateStatus]": (prev)=>{
                            const next = new Map(prev);
                            for (const lockedId of data.lockedQuests){
                                next.set(lockedId, "locked");
                            }
                            return next;
                        }
                    }["useProgress.useCallback[updateStatus]"]);
                }
                // Update last synced time on success
                setLastSynced(new Date());
                setError(null); // Clear any previous errors
                return true;
            } catch (err) {
                // Rollback on error
                setProgress(previousProgress.current);
                setError(err instanceof Error ? err.message : "Failed to update");
                return false;
            } finally{
                // Remove quest from saving set
                setSavingQuestIds({
                    "useProgress.useCallback[updateStatus]": (prev)=>{
                        const next = new Set(prev);
                        next.delete(questId);
                        return next;
                    }
                }["useProgress.useCallback[updateStatus]"]);
            }
        }
    }["useProgress.useCallback[updateStatus]"], [
        progress,
        sessionStatus
    ]);
    const getStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProgress.useCallback[getStatus]": (questId)=>{
            return progress.get(questId);
        }
    }["useProgress.useCallback[getStatus]"], [
        progress
    ]);
    const refreshProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProgress.useCallback[refreshProgress]": async ()=>{
            await fetchProgress();
        }
    }["useProgress.useCallback[refreshProgress]"], [
        fetchProgress
    ]);
    const clearUnlocked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProgress.useCallback[clearUnlocked]": ()=>{
            setUnlockedQuests([]);
        }
    }["useProgress.useCallback[clearUnlocked]"], []);
    // Initial fetch when session is ready
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProgress.useEffect": ()=>{
            if (sessionStatus === "authenticated") {
                fetchProgress();
            } else if (sessionStatus === "unauthenticated") {
                setProgress(new Map());
                setIsLoading(false);
            }
        }
    }["useProgress.useEffect"], [
        sessionStatus,
        fetchProgress
    ]);
    return {
        progress,
        isLoading,
        error,
        updateStatus,
        getStatus,
        refreshProgress,
        unlockedQuests,
        clearUnlocked,
        savingQuestIds,
        lastSynced,
        isOnline,
        pendingOfflineCount
    };
}
_s(useProgress, "95nsZboQ0RU5C1SHJSNyiNkxTcM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$30_nex_5cd500642f96487cf75b316aefb401ff$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestTreeClient",
    ()=>QuestTreeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$30_nex_5cd500642f96487cf75b316aefb401ff$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.30_nex_5cd500642f96487cf75b316aefb401ff/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/sonner@2.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$contexts$2f$StatsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/contexts/StatsContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$UserPrefsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/UserPrefsProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestTree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/QuestTree.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/QuestFilters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$SyncStatusIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/SyncStatusIndicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestTreeSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/QuestTreeSkeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$SkipQuestDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-tree/SkipQuestDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$onboarding$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/onboarding/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$onboarding$2f$WelcomeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/onboarding/WelcomeModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$detail$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-detail/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$detail$2f$QuestDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/quest-detail/QuestDetailModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$catch$2d$up$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/catch-up/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$catch$2d$up$2f$CatchUpDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/catch-up/CatchUpDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useQuests$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useQuests.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useProgress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$quest$2d$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/quest-layout.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Status cycle map for click handling (simplified: available <-> completed)
const STATUS_CYCLE = {
    locked: null,
    available: "completed",
    in_progress: "completed",
    completed: "available"
};
function QuestTreeClient() {
    _s();
    const { status: sessionStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$30_nex_5cd500642f96487cf75b316aefb401ff$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const { setStats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$contexts$2f$StatsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStats"])();
    const { prefs, isLoading: prefsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$UserPrefsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPrefsContext"])();
    // Show loading skeleton while user preferences load (authenticated users only)
    const isInitializing = sessionStatus === "loading" || sessionStatus === "authenticated" && prefsLoading;
    // Compute initial filters using user preferences
    const initialFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuestTreeClient.useMemo[initialFilters]": ()=>({
                playerLevel: prefs?.playerLevel ?? 1
            })
    }["QuestTreeClient.useMemo[initialFilters]"], [
        prefs
    ]);
    const { quests, allQuests, traders, loading, initialLoading, error, filters, setFilters, applyFilters, hasPendingChanges, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useQuests$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuests"])({
        initialFilters
    });
    // Sync saved preferences when they load (after initial mount)
    const prefsLoaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestTreeClient.useEffect": ()=>{
            if (!prefs || prefsLoaded.current) return;
            prefsLoaded.current = true;
            // Apply saved preferences to filters
            setFilters({
                playerLevel: prefs.playerLevel ?? 1
            });
            // Apply filters immediately so the quest list updates
            applyFilters();
        }
    }["QuestTreeClient.useEffect"], [
        prefs,
        setFilters,
        applyFilters
    ]);
    const { progress, updateStatus, unlockedQuests, clearUnlocked, error: progressError, savingQuestIds, lastSynced, isOnline, pendingOfflineCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgress"])();
    const [selectedQuestId, setSelectedQuestId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Skip quest dialog state
    const [skipDialogOpen, setSkipDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [skipTargetQuest, setSkipTargetQuest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [skipLoading, setSkipLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Onboarding state
    const [showWelcome, setShowWelcome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Catch-up dialog state
    const [showCatchUp, setShowCatchUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Quest detail modal state
    const [detailQuest, setDetailQuest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detailModalOpen, setDetailModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check if detail quest is currently saving
    const isDetailQuestSaving = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuestTreeClient.useMemo[isDetailQuestSaving]": ()=>{
            return detailQuest ? savingQuestIds.has(detailQuest.id) : false;
        }
    }["QuestTreeClient.useMemo[isDetailQuestSaving]"], [
        detailQuest,
        savingQuestIds
    ]);
    // Refs for stable callback references (prevents re-renders from invalidating memoization)
    const questsWithProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const sessionStatusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(sessionStatus);
    const updateStatusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(updateStatus);
    const refetchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(refetch);
    // Merge progress into quests (memoized to prevent infinite re-renders)
    const questsWithProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuestTreeClient.useMemo[questsWithProgress]": ()=>quests.map({
                "QuestTreeClient.useMemo[questsWithProgress]": (quest)=>{
                    if (quest.computedStatus === "locked") {
                        return {
                            ...quest,
                            computedStatus: "locked"
                        };
                    }
                    const userStatus = progress.get(quest.id);
                    return {
                        ...quest,
                        computedStatus: userStatus || quest.computedStatus
                    };
                }
            }["QuestTreeClient.useMemo[questsWithProgress]"])
    }["QuestTreeClient.useMemo[questsWithProgress]"], [
        quests,
        progress
    ]);
    // Merge progress into all quests (for accurate depth calculation)
    const allQuestsWithProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuestTreeClient.useMemo[allQuestsWithProgress]": ()=>allQuests.map({
                "QuestTreeClient.useMemo[allQuestsWithProgress]": (quest)=>{
                    if (quest.computedStatus === "locked") {
                        return {
                            ...quest,
                            computedStatus: "locked"
                        };
                    }
                    const userStatus = progress.get(quest.id);
                    return {
                        ...quest,
                        computedStatus: userStatus || quest.computedStatus
                    };
                }
            }["QuestTreeClient.useMemo[allQuestsWithProgress]"])
    }["QuestTreeClient.useMemo[allQuestsWithProgress]"], [
        allQuests,
        progress
    ]);
    // Keep refs in sync with current values
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestTreeClient.useEffect": ()=>{
            questsWithProgressRef.current = questsWithProgress;
        }
    }["QuestTreeClient.useEffect"], [
        questsWithProgress
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestTreeClient.useEffect": ()=>{
            sessionStatusRef.current = sessionStatus;
        }
    }["QuestTreeClient.useEffect"], [
        sessionStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestTreeClient.useEffect": ()=>{
            updateStatusRef.current = updateStatus;
        }
    }["QuestTreeClient.useEffect"], [
        updateStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestTreeClient.useEffect": ()=>{
            refetchRef.current = refetch;
        }
    }["QuestTreeClient.useEffect"], [
        refetch
    ]);
    // Show notification when quests are unlocked
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestTreeClient.useEffect": ()=>{
            if (unlockedQuests.length > 0) {
                const count = unlockedQuests.length;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`${count} quest${count > 1 ? "s" : ""} unlocked!`, {
                    description: "New quests are now available."
                });
                clearUnlocked();
                refetch();
            }
        }
    }["QuestTreeClient.useEffect"], [
        unlockedQuests,
        clearUnlocked,
        refetch
    ]);
    // Show error toast when progress error occurs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestTreeClient.useEffect": ()=>{
            if (progressError) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Progress Error", {
                    description: progressError
                });
            }
        }
    }["QuestTreeClient.useEffect"], [
        progressError
    ]);
    // Check for first-time user and show welcome modal
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestTreeClient.useEffect": ()=>{
            if (loading) return;
            const hasSeenWelcome = localStorage.getItem("eft-tracker-onboarding");
            if (!hasSeenWelcome) {
                setShowWelcome(true);
            }
        }
    }["QuestTreeClient.useEffect"], [
        loading
    ]);
    // Handle completing onboarding
    const handleOnboardingComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestTreeClient.useCallback[handleOnboardingComplete]": ()=>{
            localStorage.setItem("eft-tracker-onboarding", "completed");
            setShowWelcome(false);
        }
    }["QuestTreeClient.useCallback[handleOnboardingComplete]"], []);
    // Handle catch-up from welcome modal
    const handleCatchUpFromWelcome = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestTreeClient.useCallback[handleCatchUpFromWelcome]": ()=>{
            localStorage.setItem("eft-tracker-onboarding", "completed");
            setShowWelcome(false);
            setShowCatchUp(true);
        }
    }["QuestTreeClient.useCallback[handleCatchUpFromWelcome]"], []);
    // Handle catch-up completion
    const handleCatchUpComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestTreeClient.useCallback[handleCatchUpComplete]": ()=>{
            refetch();
        }
    }["QuestTreeClient.useCallback[handleCatchUpComplete]"], [
        refetch
    ]);
    const handleQuestSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestTreeClient.useCallback[handleQuestSelect]": (questId)=>{
            setSelectedQuestId({
                "QuestTreeClient.useCallback[handleQuestSelect]": (prev)=>prev === questId ? null : questId
            }["QuestTreeClient.useCallback[handleQuestSelect]"]);
        }
    }["QuestTreeClient.useCallback[handleQuestSelect]"], []);
    // Handle opening quest details modal
    const handleQuestDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestTreeClient.useCallback[handleQuestDetails]": (questId)=>{
            const quest = questsWithProgressRef.current.find({
                "QuestTreeClient.useCallback[handleQuestDetails].quest": (q)=>q.id === questId
            }["QuestTreeClient.useCallback[handleQuestDetails].quest"]);
            if (quest) {
                setDetailQuest(quest);
                setDetailModalOpen(true);
            }
        }
    }["QuestTreeClient.useCallback[handleQuestDetails]"], []);
    // Get prerequisites for the skip dialog
    const skipPrerequisites = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuestTreeClient.useMemo[skipPrerequisites]": ()=>{
            if (!skipTargetQuest) return [];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$quest$2d$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIncompletePrerequisites"])(skipTargetQuest.id, allQuestsWithProgress);
        }
    }["QuestTreeClient.useMemo[skipPrerequisites]"], [
        skipTargetQuest,
        allQuestsWithProgress
    ]);
    // Handle confirming the skip (complete all prerequisites)
    const handleSkipConfirm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestTreeClient.useCallback[handleSkipConfirm]": async ()=>{
            if (!skipTargetQuest || skipPrerequisites.length === 0) return;
            setSkipLoading(true);
            try {
                for (const prereq of skipPrerequisites){
                    const success = await updateStatus(prereq.id, "completed");
                    if (!success) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to Update", {
                            description: `Could not complete ${prereq.title}. Please try again.`
                        });
                        setSkipLoading(false);
                        return;
                    }
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`${skipPrerequisites.length} quest${skipPrerequisites.length > 1 ? "s" : ""} completed!`, {
                    description: `${skipTargetQuest.title} is now available.`
                });
                setSkipDialogOpen(false);
                setSkipTargetQuest(null);
                await refetch();
            } catch  {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to Update", {
                    description: "Could not complete prerequisite quests. Please try again."
                });
            } finally{
                setSkipLoading(false);
            }
        }
    }["QuestTreeClient.useCallback[handleSkipConfirm]"], [
        skipTargetQuest,
        skipPrerequisites,
        updateStatus,
        refetch
    ]);
    // Stable callback reference using refs
    const handleStatusChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestTreeClient.useCallback[handleStatusChange]": async (questId)=>{
            const quest = questsWithProgressRef.current.find({
                "QuestTreeClient.useCallback[handleStatusChange].quest": (q)=>q.id === questId
            }["QuestTreeClient.useCallback[handleStatusChange].quest"]);
            if (!quest) return;
            const currentStatus = quest.computedStatus;
            // If locked, open skip dialog instead of showing toast
            if (currentStatus === "locked") {
                if (sessionStatusRef.current !== "authenticated") {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warning("Sign In Required", {
                        description: "Please sign in to track your progress.",
                        action: {
                            label: "Sign In",
                            onClick: {
                                "QuestTreeClient.useCallback[handleStatusChange]": ()=>window.location.href = "/login"
                            }["QuestTreeClient.useCallback[handleStatusChange]"]
                        }
                    });
                    return;
                }
                setSkipTargetQuest(quest);
                setSkipDialogOpen(true);
                return;
            }
            // If not authenticated, prompt to login
            if (sessionStatusRef.current !== "authenticated") {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warning("Sign In Required", {
                    description: "Please sign in to track your progress.",
                    action: {
                        label: "Sign In",
                        onClick: {
                            "QuestTreeClient.useCallback[handleStatusChange]": ()=>window.location.href = "/login"
                        }["QuestTreeClient.useCallback[handleStatusChange]"]
                    }
                });
                return;
            }
            // Get next status in cycle
            const nextStatus = STATUS_CYCLE[currentStatus];
            if (!nextStatus) return;
            const success = await updateStatusRef.current(questId, nextStatus);
            if (success) {
                if (nextStatus === "completed") {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Quest Completed!", {
                        description: quest.title
                    });
                }
                await refetchRef.current();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to Update", {
                    description: "Could not update quest status. Please try again."
                });
            }
        }
    }["QuestTreeClient.useCallback[handleStatusChange]"], []);
    // Wrapper for modal - reuses parent's handleStatusChange logic
    const handleModalStatusChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestTreeClient.useCallback[handleModalStatusChange]": async (questId)=>{
            await handleStatusChange(questId);
        }
    }["QuestTreeClient.useCallback[handleModalStatusChange]"], [
        handleStatusChange
    ]);
    // Handle objective toggle from modal (supports both binary and numeric)
    const handleObjectiveToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuestTreeClient.useCallback[handleObjectiveToggle]": async (objectiveId, update)=>{
            if (sessionStatusRef.current !== "authenticated") {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Sign in Required", {
                    description: "Please sign in to track quest progress."
                });
                return {
                    questStatusChanged: false
                };
            }
            try {
                // Build request body based on update type
                const body = typeof update === "boolean" ? {
                    completed: update
                } : {
                    current: update.current
                };
                const response = await fetch(`/api/progress/objective/${objectiveId}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                });
                if (!response.ok) {
                    const errorData = await response.json().catch({
                        "QuestTreeClient.useCallback[handleObjectiveToggle]": ()=>({})
                    }["QuestTreeClient.useCallback[handleObjectiveToggle]"]);
                    throw new Error(errorData.error || "Failed to update objective");
                }
                const data = await response.json();
                // Refetch quests to get updated objective progress
                await refetchRef.current();
                // Show toast if quest status changed
                if (data.quest?.statusChanged) {
                    if (data.quest.status === "COMPLETED") {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Quest Completed!", {
                            description: `All objectives for ${data.quest.title} are complete.`
                        });
                    } else if (data.quest.status === "IN_PROGRESS") {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Quest Started", {
                            description: data.quest.title
                        });
                    }
                }
                return {
                    questStatusChanged: data.quest?.statusChanged ?? false,
                    newQuestStatus: data.quest?.status
                };
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to Update Objective", {
                    description: err instanceof Error ? err.message : "Please try again."
                });
                return {
                    questStatusChanged: false
                };
            }
        }
    }["QuestTreeClient.useCallback[handleObjectiveToggle]"], []);
    // Calculate progress stats
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuestTreeClient.useMemo[stats]": ()=>({
                total: questsWithProgress.length,
                completed: questsWithProgress.filter({
                    "QuestTreeClient.useMemo[stats]": (q)=>q.computedStatus === "completed"
                }["QuestTreeClient.useMemo[stats]"]).length,
                available: questsWithProgress.filter({
                    "QuestTreeClient.useMemo[stats]": (q)=>q.computedStatus === "available"
                }["QuestTreeClient.useMemo[stats]"]).length,
                locked: questsWithProgress.filter({
                    "QuestTreeClient.useMemo[stats]": (q)=>q.computedStatus === "locked"
                }["QuestTreeClient.useMemo[stats]"]).length
            })
    }["QuestTreeClient.useMemo[stats]"], [
        questsWithProgress
    ]);
    // Update stats in context for header display
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestTreeClient.useEffect": ()=>{
            if (!loading && !error) {
                setStats(stats);
            }
            return ({
                "QuestTreeClient.useEffect": ()=>setStats(null)
            })["QuestTreeClient.useEffect"];
        }
    }["QuestTreeClient.useEffect"], [
        stats,
        setStats,
        loading,
        error
    ]);
    if (initialLoading || isInitializing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestTreeSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuestTreeSkeleton"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
            lineNumber: 434,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-medium text-destructive",
                        children: "Error loading quests"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
                        lineNumber: 441,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground mb-4",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
                        lineNumber: 444,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>refetch(),
                        className: "px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",
                        children: "Try Again"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
                        lineNumber: 445,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
                lineNumber: 440,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
            lineNumber: 439,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$onboarding$2f$WelcomeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WelcomeModal"], {
                open: showWelcome,
                onOpenChange: setShowWelcome,
                onGetStarted: handleOnboardingComplete,
                onCatchUp: handleCatchUpFromWelcome
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
                lineNumber: 458,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$catch$2d$up$2f$CatchUpDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatchUpDialog"], {
                open: showCatchUp,
                onOpenChange: setShowCatchUp,
                quests: allQuestsWithProgress,
                onComplete: handleCatchUpComplete
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
                lineNumber: 464,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$SkipQuestDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkipQuestDialog"], {
                open: skipDialogOpen,
                onOpenChange: setSkipDialogOpen,
                targetQuest: skipTargetQuest,
                prerequisites: skipPrerequisites,
                onConfirm: handleSkipConfirm,
                isLoading: skipLoading
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
                lineNumber: 470,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$detail$2f$QuestDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuestDetailModal"], {
                quest: detailQuest,
                open: detailModalOpen,
                onOpenChange: setDetailModalOpen,
                onStatusChange: handleModalStatusChange,
                onObjectiveToggle: handleObjectiveToggle,
                isSaving: isDetailQuestSaving
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
                lineNumber: 478,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuestFilters"], {
                traders: traders,
                quests: allQuestsWithProgress,
                filters: filters,
                onFilterChange: setFilters,
                onApplyFilters: applyFilters,
                hasPendingChanges: hasPendingChanges
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
                lineNumber: 486,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-0",
                children: questsWithProgress.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$QuestTree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuestTree"], {
                    quests: questsWithProgress,
                    allQuests: allQuestsWithProgress,
                    traders: traders,
                    selectedQuestId: selectedQuestId,
                    playerLevel: filters.playerLevel,
                    maxColumns: null,
                    savingQuestIds: savingQuestIds,
                    onQuestSelect: handleQuestSelect,
                    onStatusChange: handleStatusChange,
                    onQuestDetails: handleQuestDetails
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
                    lineNumber: 496,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "No quests found matching your filters."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
                        lineNumber: 510,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
                    lineNumber: 509,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this),
            sessionStatus === "authenticated" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 px-4 py-2 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$quest$2d$tree$2f$SyncStatusIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SyncStatusIndicator"], {
                    lastSynced: lastSynced,
                    isOnline: isOnline,
                    isSaving: savingQuestIds.size > 0,
                    pendingOfflineCount: pendingOfflineCount
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
                    lineNumber: 519,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
                lineNumber: 518,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/quest-tree/QuestTreeClient.tsx",
        lineNumber: 457,
        columnNumber: 5
    }, this);
}
_s(QuestTreeClient, "KcGLZ3XUquaCDq98R4MJVadi8kU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$30_nex_5cd500642f96487cf75b316aefb401ff$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$contexts$2f$StatsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStats"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$UserPrefsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPrefsContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useQuests$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuests"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgress"]
    ];
});
_c = QuestTreeClient;
var _c;
__turbopack_context__.k.register(_c, "QuestTreeClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/guest-banner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GuestBanner",
    ()=>GuestBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7._c4e04f434dd039bd14bd0d6fc5425190/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$30_nex_5cd500642f96487cf75b316aefb401ff$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.30_nex_5cd500642f96487cf75b316aefb401ff/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.554.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function GuestBanner() {
    _s();
    const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$30_nex_5cd500642f96487cf75b316aefb401ff$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [dismissed, setDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Don't show if authenticated or dismissed
    if (status === "authenticated" || status === "loading" || dismissed) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-primary/10 border-b border-primary/20 px-3 py-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto flex items-center justify-between gap-2 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-foreground",
                    children: "You're browsing as a guest. Your progress won't be saved."
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/guest-banner.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "icon",
                    className: "h-7 w-7 shrink-0",
                    onClick: ()=>setDismissed(true),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$554$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/guest-banner.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$_c4e04f434dd039bd14bd0d6fc5425190$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Dismiss"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/guest-banner.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/guest-banner.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/guest-banner.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/guest-banner.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(GuestBanner, "kWBiL4i9+196Z7KvfVKOEAxcpWo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$30_nex_5cd500642f96487cf75b316aefb401ff$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = GuestBanner;
var _c;
__turbopack_context__.k.register(_c, "GuestBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_d819528f._.js.map