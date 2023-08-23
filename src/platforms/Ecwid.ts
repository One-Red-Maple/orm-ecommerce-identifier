export async function isPlatform(html: string): Promise<any> {
  if (html.includes(`<meta name="generator" content="ec-instant-site" />`)) {
    return {
      name: "Ecwid",
      isPlatform: true,
    };
  } else {
    return {
      name: "Ecwid",
      isPlatform: false,
    };
  }
}
