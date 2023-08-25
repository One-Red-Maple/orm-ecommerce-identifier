## Usage

To use this package, import the `getPlatformByUrl` function and call it with a URL as the argument:

TypeScript:

```typescript
import { getPlatformByUrl } from "ecomm-identifier";
const url = "http://swiftoutside.com";
const platform = await getPlatformByUrl(url);
console.log(platform);
//{ name: 'WooCommerce'}
```

Alternatively, you can import the `getPlatformByHtml` function and call it with an HTML string as the argument:

```typescript
import { getPlatformByHtml } from "ecomm-identifier";
const html = "<html><head><title>Swift Outside</title></head><body></body></html>";
const platform = await getPlatformByHtml(html);
console.log(platform);
//{ name: 'WooCommerce'}
```

To save memory, you can also import the `getPlatformByCheerio` function and call it with a Cheerio object as the argument:

```typescript
import { getPlatformByCheerio } from "ecomm-identifier";
import cheerio from "cheerio";
const html = "<html><head><title>Swift Outside</title></head><body></body></html>";
const $ = cheerio.load(html);
const platform = await getPlatformByCheerio($);
console.log(platform);
//{ name: 'WooCommerce'}
```

## Supported Platforms

- [x] BigCommerce
- [x] Ecwid
- [x] Lightspeed
- [x] Magento
- [x] Shopify
- [x] Square
- [x] Squarespace
- [x] Wix
- [x] WooCommerce
- [x] Shoplaza
- [x] Weebly
- [x] PrestaShop

TODO:

- [ ] Add more platforms
- [ ] Add tests
- [ ] Automate deployment
