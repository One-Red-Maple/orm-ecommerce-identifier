export async function isPlatform(html: string): Promise<any> {
  if (html.includes(`<link rel="preconnect" href="https://images.squarespace-cdn.com">`)) {
    return {
      name: "Squarespace",
      isPlatform: true,
    };
  } else {
    return {
      name: "Squarespace",
      isPlatform: false,
    };
  }
}
