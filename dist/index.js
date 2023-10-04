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
exports.getPlatformByCheerio = void 0;
const cheerio = __importStar(require("cheerio"));
const axios_1 = __importDefault(require("axios"));
const platforms_1 = require("./platforms");
class PlatformDetector {
    constructor(ch) {
        this.ch = ch;
    }
    detectPlatform() {
        for (const platformName in platforms_1.platforms) {
            const selector = platforms_1.platforms[platformName];
            if (this.ch(selector).length > 0) {
                return { name: platformName };
            }
        }
        return { name: "Other" };
    }
}
//kept function name same as legacy to ensure compatibility
async function getPlatformByCheerio(input) {
    try {
        const ch = typeof input === 'string' && input.startsWith("http") ? cheerio.load((await axios_1.default.get(input)).data) : cheerio.load(input);
        const platformDetector = new PlatformDetector(ch);
        return platformDetector.detectPlatform();
    }
    catch (error) {
        console.error("Error detecting platform:", error);
        throw error;
    }
}
exports.getPlatformByCheerio = getPlatformByCheerio;
// For testing
// (async () => {
//   console.log(await getPlatformByCheerio('https://holdit.com/produkt/mobilskal-silikon-red-velvet-iphone-15'));
// })();
