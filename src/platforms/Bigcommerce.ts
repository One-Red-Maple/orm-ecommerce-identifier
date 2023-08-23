export async function isPlatform(html: string): Promise<any> {
  if (html.includes(`<meta name='platform' content='bigcommerce.stencil' />`)) {
    return {
      name: "Bigcommerce",
      isPlatform: true,
    };
  } else {
    return {
      name: "Bigcommerce",
      isPlatform: false,
    };
  }
}
