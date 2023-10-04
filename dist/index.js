"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlatformByUrl = exports.getPlatformByHTML = exports.getPlatformByCheerio = void 0;
const cheerio = __importStar(require("cheerio"));
const axios_1 = __importDefault(require("axios")); // Assuming you have Axios for fetching the URL content
const platforms_1 = require("./platforms");
class PlatformDetector {
    constructor(ch) {
        this.ch = ch;
    }
    detectPlatform() {
        for (const platformName of Object.keys(platforms_1.platforms)) {
            const selector = platforms_1.platforms[platformName];
            if (this.ch(selector).length > 0) {
                return { name: platformName };
            }
        }
        return { name: "Other" };
    }
}
async function getPlatformByCheerio(ch) {
    try {
        const platformDetector = new PlatformDetector(ch);
        return platformDetector.detectPlatform();
    }
    catch (error) {
        console.error("Error detecting platform:", error);
        throw error;
    }
}
exports.getPlatformByCheerio = getPlatformByCheerio;
async function getPlatformByHTML(html) {
    try {
        const ch = cheerio.load(html);
        return getPlatformByCheerio(ch);
    }
    catch (error) {
        console.error("Error getting platform from HTML:", error);
        throw error;
    }
}
exports.getPlatformByHTML = getPlatformByHTML;
async function getPlatformByUrl(url) {
    try {
        const response = await axios_1.default.get(url);
        const html = response.data;
        const ch = cheerio.load(html);
        return getPlatformByCheerio(ch);
    }
    catch (error) {
        console.error("Error getting platform from URL:", error);
        throw error;
    }
}
exports.getPlatformByUrl = getPlatformByUrl;
// For testing
// (async () => {
//   console.log(await getPlatformByUrl('https://holdit.com/produkt/mobilskal-silikon-red-velvet-iphone-15'));
// })();
