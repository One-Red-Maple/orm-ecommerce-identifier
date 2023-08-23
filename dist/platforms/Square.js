"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlatform = void 0;
async function isPlatform(html) {
    if (html.includes(`<meta name="generator" content="Square Online">`)) {
        return {
            name: "Square",
            isPlatform: true,
        };
    }
    else {
        return {
            name: "Square",
            isPlatform: false,
        };
    }
}
exports.isPlatform = isPlatform;
