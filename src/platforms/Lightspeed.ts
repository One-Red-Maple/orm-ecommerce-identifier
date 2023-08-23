export async function isPlatform(html: string): Promise<any> {
  if (html.includes(`<link rel="shortcut icon" href="https://cdn.shoplightspeed.com`)) {
    return {
      name: "Lightspeed",
      isPlatform: true,
    };
  } else {
    return {
      name: "Lightspeed",
      isPlatform: false,
    };
  }
}
