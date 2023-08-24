"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlatformByHtml = exports.getPlatformByUrl = void 0;
const axios_1 = __importDefault(require("axios"));
const platfroms_1 = require("./platfroms");
// Get platform by url
async function getPlatformByUrl(url) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios_1.default.get(url);
            //loop through keys of platforms object
            Object.keys(platfroms_1.platforms).forEach(async (key) => {
                if (response.data.includes(platfroms_1.platforms[key])) {
                    resolve({
                        url: url,
                        name: key,
                        success: true,
                    });
                }
            });
            resolve({
                url: url,
                success: false,
            });
        }
        catch (error) {
            console.error("Error fetching HTML:", error);
            reject({
                url: url,
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
            //loop through keys of platforms object
            Object.keys(platfroms_1.platforms).forEach(async (key) => {
                if (html.includes(platfroms_1.platforms[key])) {
                    resolve({
                        name: key,
                        success: true,
                    });
                }
            });
            resolve({
                success: false,
            });
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
module.exports = {
    getPlatformByUrl,
    getPlatformByHtml,
};
//For testing
(async () => {
    console.log(await getPlatformByHtml(`"https://creativelearningtoys.com"`));
})();
