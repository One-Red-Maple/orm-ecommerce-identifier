"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlatform = void 0;
async function isPlatform(html) {
    if (html.includes(`<link rel="preconnect" href="https://images.squarespace-cdn.com">`)) {
        return {
            name: "Squarespace",
            isPlatform: true,
        };
    }
    else {
        return {
            name: "Squarespace",
            isPlatform: false,
        };
    }
}
exports.isPlatform = isPlatform;
