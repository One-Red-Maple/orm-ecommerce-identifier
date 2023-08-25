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
exports.getPlatformByCheerio = exports.getPlatformByHtml = exports.getPlatformByUrl = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio = __importStar(require("cheerio"));
const platfroms_1 = require("./platfroms");
// Get platform by url
async function getPlatformByUrl(url) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios_1.default.get(url);
            let html = response.data;
            let data = await getPlatformByHtml(html);
            resolve(data);
        }
        catch (err) {
            console.error("Error fetching HTML:", err);
            reject({
                success: false,
            });
        }
    });
}
exports.getPlatformByUrl = getPlatformByUrl;
// Get platform by html
async function getPlatformByHtml(html) {
    return new Promise(async (resolve, reject) => {
        try {
            var ch = cheerio.load(html);
            let data = await getPlatformByCheerio(ch);
            resolve(data);
        }
        catch (error) {
            console.error("Error fetching HTML:", error);
            reject({
                success: false,
            });
        }
    });
}
exports.getPlatformByHtml = getPlatformByHtml;
function getPlatformByCheerio(ch) {
    return new Promise(async (resolve, reject) => {
        try {
            let data = {
                name: "Other",
            };
            for (const key in platfroms_1.platforms) {
                if (Object.prototype.hasOwnProperty.call(platfroms_1.platforms, key)) {
                    const element = platfroms_1.platforms[key];
                    if (ch(element).length > 0) {
                        data.name = key;
                        break;
                    }
                }
            }
            resolve(data);
        }
        catch (error) {
            console.error("Error fetching HTML:", error);
            reject({
                success: false,
            });
        }
    });
}
exports.getPlatformByCheerio = getPlatformByCheerio;
module.exports = {
    getPlatformByUrl,
    getPlatformByHtml,
    getPlatformByCheerio,
};
//For testing
// (async () => {
//   console.log(await getPlatformByUrl(`https://acedeckboards.ca`));
// })();
