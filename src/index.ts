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
      const selector: any = platforms[platformName as keyof typeof platforms];
      if (ch(selector).length > 0) {
        return { name: platformName as Platform["name"] };
      }
    }

    return { name: "Other" };
  }
}


  const headers = {
    'User-Agent': 'xyz',
  };

  export async function getPlatformByUrl(url: string): Promise<Platform> {
    try {
      const response = await axios.get(url, { headers });
      const html = response.data;
      const platformDetector = new PlatformDetector(html);
      return platformDetector.detectPlatform();
    } catch (error) {
      console.error("Error fetching or parsing HTML:", error);
      throw error;
  }
}

// // For testing
// (async () => {
//   console.log(await getPlatformByUrl(`https://us.gosund.com/products/lenovo-xt80-bluetooth-5-3-earphones-true-wireless-headphones-with-mic-button-control-noise-reduction-earhooks-waterproof-headset-soav?spm=..collection_2aae9552-e414-4c4e-a1d0-bd58310de994.collection_detail_1.2&spm_prev=..index.header_1.1`));
// })();