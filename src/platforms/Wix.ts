export async function isPlatform(html: string): Promise<any> {
  if (html.includes(`<meta name="generator" content="Wix.com Website Builder"/>`)) {
    return {
      name: "Wix",
      isPlatform: true,
    };
  } else {
    return {
      name: "Wix",
      isPlatform: false,
    };
  }
}
