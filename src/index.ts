import * as cheerio from "cheerio";
import axios from "axios";  // Assuming you have Axios for fetching the URL content
import { platforms } from "./platforms";

interface Platform {
  name: "Other" | "Bigcommerce" | "Ecwid" | "Lightspeed" | "Magento" | "Shopify" | "Square" | "Squarespace" | "Wix" | "WooCommerce" | "Shoplazza" | "Weebly" | "PrestaShop";
}

class PlatformDetector {
  private ch: any;

  constructor(ch: any) {
    this.ch = ch;
  }

  public detectPlatform(): Platform {
    for (const platformName of Object.keys(platforms)) {
      const selector: any = platforms[platformName as keyof typeof platforms];
      if (this.ch(selector).length > 0) {
        return { name: platformName as Platform["name"] };
      }
    }

    return { name: "Other" };
  }
}

export async function getPlatformByCheerio(ch: any): Promise<Platform> {
  try {
    const platformDetector = new PlatformDetector(ch);
    return platformDetector.detectPlatform();
  } catch (error) {
    console.error("Error detecting platform:", error);
    throw error;
  }
}

export async function getPlatformByHTML(html: string): Promise<Platform> {
  try {
    const ch = cheerio.load(html);
    return getPlatformByCheerio(ch);
  } catch (error) {
    console.error("Error getting platform from HTML:", error);
    throw error;
  }
}

export async function getPlatformByUrl(url: string): Promise<Platform> {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const ch = cheerio.load(html);
    return getPlatformByCheerio(ch);
  } catch (error) {
    console.error("Error getting platform from URL:", error);
    throw error;
  }
}

// For testing
(async () => {
  console.log(await getPlatformByUrl('https://holdit.com/produkt/mobilskal-silikon-red-velvet-iphone-15'));
})();