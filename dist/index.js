"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlatformByHtml = exports.getPlatformByUrl = void 0;
const axios_1 = __importDefault(require("axios"));
const Bigcommerce_js_1 = require("./platforms/Bigcommerce.js");
const Ecwid_js_1 = require("./platforms/Ecwid.js");
const Lightspeed_js_1 = require("./platforms/Lightspeed.js");
const Magento_js_1 = require("./platforms/Magento.js");
const Shopify_js_1 = require("./platforms/Shopify.js");
const Square_js_1 = require("./platforms/Square.js");
const Squarespace_js_1 = require("./platforms/Squarespace.js");
const Wix_js_1 = require("./platforms/Wix.js");
const Woocommerce_js_1 = require("./platforms/Woocommerce.js");
const platformFunctions = [
    { isPlatform: Bigcommerce_js_1.isPlatform },
    { isPlatform: Ecwid_js_1.isPlatform },
    { isPlatform: Lightspeed_js_1.isPlatform },
    { isPlatform: Magento_js_1.isPlatform },
    { isPlatform: Shopify_js_1.isPlatform },
    { isPlatform: Square_js_1.isPlatform },
    { isPlatform: Squarespace_js_1.isPlatform },
    { isPlatform: Wix_js_1.isPlatform },
    { isPlatform: Woocommerce_js_1.isPlatform },
];
// Get platform by url
async function getPlatformByUrl(url) {
    try {
        const response = await axios_1.default.get(url);
        //loop through platform functions until one returns true
        for (const platformFunction of platformFunctions) {
            const platform = await platformFunction.isPlatform(response.data);
            if (platform.isPlatform) {
                return {
                    name: platform.name,
                    url: url,
                    success: true,
                };
            }
        }
        return {
            url: url,
            success: false,
        };
    }
    catch (error) {
        console.error("Error fetching HTML:", error);
        return {
            url: url,
            success: false,
        };
    }
}
exports.getPlatformByUrl = getPlatformByUrl;
// Get platform by html
async function getPlatformByHtml(html) {
    //loop through platform functions until one returns true
    for (const platformFunction of platformFunctions) {
        const platform = await platformFunction.isPlatform(html);
        if (platform.isPlatform) {
            return {
                name: platform.name,
                success: true,
            };
        }
    }
    return {
        success: false,
    };
}
exports.getPlatformByHtml = getPlatformByHtml;
module.exports = {
    getPlatformByUrl,
    getPlatformByHtml,
};
