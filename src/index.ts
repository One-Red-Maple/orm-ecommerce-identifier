import * as cheerio from "cheerio";
import axios from "axios";
import { platforms } from "./platforms";

interface Platform {
  name: keyof typeof platforms | "Other";
}

class PlatformDetector {
  constructor(private ch: any) {}

  detectPlatform(): Platform {
    for (const platformName in platforms) {
      const selector = platforms[platformName as keyof typeof platforms];
      if (this.ch(selector).length > 0) {
        return { name: platformName as keyof typeof platforms };
      }
    }
    return { name: "Other" };
  }
}

//kept function name same as legacy to ensure compatibility
export async function getPlatformByCheerio(input: string): Promise<Platform> {
  try {
    const ch = typeof input === 'string' && input.startsWith("http") ? cheerio.load((await axios.get(input)).data) : cheerio.load(input);
    const platformDetector = new PlatformDetector(ch);
    return platformDetector.detectPlatform();
  } catch (error) {
    console.error("Error detecting platform:", error);
    throw error;
  }
}


// For testing
// (async () => {
//   console.log(await getPlatformByCheerio('https://holdit.com/produkt/mobilskal-silikon-red-velvet-iphone-15'));
// })();