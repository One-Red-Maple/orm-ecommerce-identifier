"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlatform = void 0;
async function isPlatform(html) {
    if (html.includes(`<style id='woocommerce-inline-inline-css' type='text/css'>`)) {
        return {
            name: "WooCommerce",
            isPlatform: true,
        };
    }
    else {
        return {
            name: "WooCommerce",
            isPlatform: false,
        };
    }
}
exports.isPlatform = isPlatform;
