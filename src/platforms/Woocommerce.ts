export async function isPlatform(html: string): Promise<any> {
  if (html.includes(`<style id='woocommerce-inline-inline-css' type='text/css'>`)) {
    return {
      name: "WooCommerce",
      isPlatform: true,
    };
  } else {
    return {
      name: "WooCommerce",
      isPlatform: false,
    };
  }
}
