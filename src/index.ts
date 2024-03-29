import axios from "axios";
import * as cheerio from "cheerio";
import { platforms } from "./platforms";

interface platform {
  name: "Other" | "Bigcommerce" | "Ecwid" | "Lightspeed" | "Magento" | "Shopify" | "Square" | "Squarespace" | "Wix" | "WooCommerce" | "Shoplazza" | "Weebly" | "PrestaShop";
}

// Get platform by url
export async function getPlatformByUrl(url: string): Promise<platform> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(url, {
        timeout: 5000,
      });
      let html = response.data;
      let data = await getPlatformByHtml(html);
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
}

// Get platform by html
export async function getPlatformByHtml(html: string): Promise<platform> {
  return new Promise(async (resolve, reject) => {
    try {
      var ch = cheerio.load(html);
      let data = await getPlatformByCheerio(ch);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

export function getPlatformByCheerio(ch: any): Promise<platform> {
  return new Promise(async (resolve, reject) => {
    try {
      let data: platform = {
        name: "Other",
      };
      for (const key in platforms) {
        if (Object.prototype.hasOwnProperty.call(platforms, key)) {
          const element = platforms[key as keyof typeof platforms];
          if (ch(element).length > 0) {
            data.name = key as platform["name"];
            break;
          }
        }
      }
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  getPlatformByUrl,
  getPlatformByHtml,
  getPlatformByCheerio,
};

//For testing
// (async () => {
//   console.log(await getPlatformByUrl(`https://acedeckboards.ca`));
// })();
