"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlatform = void 0;
async function isPlatform(html) {
    if (html.includes(`<link rel="shortcut icon" href="https://cdn.shoplightspeed.com`)) {
        return {
            name: "Lightspeed",
            isPlatform: true,
        };
    }
    else {
        return {
            name: "Lightspeed",
            isPlatform: false,
        };
    }
}
exports.isPlatform = isPlatform;
