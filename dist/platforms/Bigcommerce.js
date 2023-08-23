"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlatform = void 0;
async function isPlatform(html) {
    if (html.includes(`<meta name='platform' content='bigcommerce.stencil' />`)) {
        return {
            name: "Bigcommerce",
            isPlatform: true,
        };
    }
    else {
        return {
            name: "Bigcommerce",
            isPlatform: false,
        };
    }
}
exports.isPlatform = isPlatform;
