interface platform {
    name: "Other" | "Bigcommerce" | "Ecwid" | "Lightspeed" | "Magento" | "Shopify" | "Square" | "Squarespace" | "Wix" | "WooCommerce" | "Shoplazza" | "Weebly" | "PrestaShop";
}
export declare function getPlatformByUrl(url: string): Promise<platform>;
export declare function getPlatformByHtml(html: string): Promise<platform>;
export declare function getPlatformByCheerio(ch: any): Promise<platform>;
export {};
