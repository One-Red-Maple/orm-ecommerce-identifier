import axios from "axios";
import { isPlatform as isBigcommercePlatform } from "./platforms/Bigcommerce.js";
import { isPlatform as isEcwidPlatform } from "./platforms/Ecwid.js";
import { isPlatform as isLightspeedPlatform } from "./platforms/Lightspeed.js";
import { isPlatform as isMagentoPlatform } from "./platforms/Magento.js";
import { isPlatform as isShopifyPlatform } from "./platforms/Shopify.js";
import { isPlatform as isSquarePlatform } from "./platforms/Square.js";
import { isPlatform as isSquarespacePlatform } from "./platforms/Squarespace.js";
import { isPlatform as isWixPlatform } from "./platforms/Wix.js";
import { isPlatform as isWoocommercePlatform } from "./platforms/Woocommerce.js";

interface PlatformDetectionResult {
  name: "Bigcommerce" | "Ecwid" | "Lightspeed" | "Magento" | "Shopify" | "Square" | "Squarespace" | "Wix" | "Woocommerce";
  isPlatform: boolean;
}
interface PlatformFunction {
  isPlatform: (platform: string) => Promise<PlatformDetectionResult>;
}

const platformFunctions: PlatformFunction[] = [
  { isPlatform: isBigcommercePlatform },
  { isPlatform: isEcwidPlatform },
  { isPlatform: isLightspeedPlatform },
  { isPlatform: isMagentoPlatform },
  { isPlatform: isShopifyPlatform },
  { isPlatform: isSquarePlatform },
  { isPlatform: isSquarespacePlatform },
  { isPlatform: isWixPlatform },
  { isPlatform: isWoocommercePlatform },
];

// Get platform by url
export async function getPlatformByUrl(url: string): Promise<any> {
  try {
    const response = await axios.get(url);
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
  } catch (error) {
    console.error("Error fetching HTML:", error);
    return {
      url: url,
      success: false,
    };
  }
}

// Get platform by html
export async function getPlatformByHtml(html: string): Promise<any> {
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

module.exports = {
  getPlatformByUrl,
  getPlatformByHtml,
};
