"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlatform = void 0;
async function isPlatform(html) {
    if (html.includes(`<meta name="generator" content="ec-instant-site" />`)) {
        return {
            name: "Ecwid",
            isPlatform: true,
        };
    }
    else {
        return {
            name: "Ecwid",
            isPlatform: false,
        };
    }
}
exports.isPlatform = isPlatform;
