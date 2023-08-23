export async function isPlatform(html: string): Promise<any> {
  if (html.includes(`<meta name="generator" content="Square Online">`)) {
    return {
      name: "Square",
      isPlatform: true,
    };
  } else {
    return {
      name: "Square",
      isPlatform: false,
    };
  }
}
