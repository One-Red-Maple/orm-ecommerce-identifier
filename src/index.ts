import axios from "axios";
import { platforms } from "./platfroms";

interface pltaform {
  name: "" | "Bigcommerce";
}

// Get platform by url
export async function getPlatformByUrl(url: string): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(url);
      //loop through keys of platforms object
      Object.keys(platforms).forEach(async (key) => {
        if (response.data.includes(platforms[key as keyof typeof platforms])) {
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
    } catch (error) {
      console.error("Error fetching HTML:", error);
      reject({
        url: url,
        success: false,
      });
    }
  });
}

// Get platform by html
export async function getPlatformByHtml(html: string): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      //loop through keys of platforms object
      Object.keys(platforms).forEach(async (key) => {
        if (html.includes(platforms[key as keyof typeof platforms])) {
          resolve({
            name: key,
            success: true,
          });
        }
      });
      resolve({
        success: false,
      });
    } catch (error) {
      console.error("Error fetching HTML:", error);
      reject({
        success: false,
      });
    }
  });
}

module.exports = {
  getPlatformByUrl,
  getPlatformByHtml,
};

//For testing
(async () => {
  console.log(await getPlatformByHtml(`"https://creativelearningtoys.com"`));
})();
