export async function isPlatform(html: string): Promise<any> {
  if (html.includes(`<script type="text/x-magento-init">`)) {
    return {
      name: "Magento",
      isPlatform: true,
    };
  } else {
    return {
      name: "Magento",
      isPlatform: false,
    };
  }
}
