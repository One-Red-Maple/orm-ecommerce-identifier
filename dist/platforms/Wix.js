"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlatform = void 0;
async function isPlatform(html) {
    if (html.includes(`<meta name="generator" content="Wix.com Website Builder"/>`)) {
        return {
            name: "Wix",
            isPlatform: true,
        };
    }
    else {
        return {
            name: "Wix",
            isPlatform: false,
        };
    }
}
exports.isPlatform = isPlatform;
