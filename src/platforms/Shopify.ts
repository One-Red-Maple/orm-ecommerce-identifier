export async function isPlatform(html: string): Promise<any> {
  if (html.includes(`href="https://cdn.shopify.com"`)) {
    return {
      name: "Shopify",
      isPlatform: true,
    };
  } else {
    return {
      name: "Shopify",
      isPlatform: false,
    };
  }
}
