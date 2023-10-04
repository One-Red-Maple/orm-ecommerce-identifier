interface Platform {
    name: "Other" | "Bigcommerce" | "Ecwid" | "Lightspeed" | "Magento" | "Shopify" | "Square" | "Squarespace" | "Wix" | "WooCommerce" | "Shoplazza" | "Weebly" | "PrestaShop";
}
export declare function getPlatformByCheerio(ch: any): Promise<Platform>;
export declare function getPlatformByHTML(html: string): Promise<Platform>;
export declare function getPlatformByUrl(url: string): Promise<Platform>;
export {};
