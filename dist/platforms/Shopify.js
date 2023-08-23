"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlatform = void 0;
async function isPlatform(html) {
    if (html.includes(`href="https://cdn.shopify.com"`)) {
        return {
            name: "Shopify",
            isPlatform: true,
        };
    }
    else {
        return {
            name: "Shopify",
            isPlatform: false,
        };
    }
}
exports.isPlatform = isPlatform;
