import axios from "axios";
import * as cheerio from "cheerio";
import { platforms } from "./platforms";

interface Platform {
  name: "Other" | "Bigcommerce" | "Ecwid" | "Lightspeed" | "Magento" | "Shopify" | "Square" | "Squarespace" | "Wix" | "WooCommerce" | "Shoplazza" | "Weebly" | "PrestaShop";
}

class PlatformDetector {
  private html: string;

  constructor(html: string) {
    this.html = html;
  }

  public detectPlatform(): Platform {
    const ch = cheerio.load(this.html);

    for (const platformName of Object.keys(platforms)) {
      const selector: = platforms[platformName as keyof typeof platforms];
      if (ch(selector).length > 0) {
        return { name: platformName as Platform["name"] };
      }
    }

    return { name: "Other" };
  }
}

export async function getPlatformByUrl(url: string): Promise<Platform> {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const platformDetector = new PlatformDetector(html);
    return platformDetector.detectPlatform();
  } catch (error) {
    console.error("Error fetching or parsing HTML:", error);
    throw error;
  }
}

// For testing
(async () => {
  console.log(await getPlatformByUrl(`https://acedeckboards.ca`));
})();
