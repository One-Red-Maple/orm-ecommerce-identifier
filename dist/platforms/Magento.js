"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlatform = void 0;
async function isPlatform(html) {
    if (html.includes(`<script type="text/x-magento-init">`)) {
        return {
            name: "Magento",
            isPlatform: true,
        };
    }
    else {
        return {
            name: "Magento",
            isPlatform: false,
        };
    }
}
exports.isPlatform = isPlatform;
