export var platforms = {
  Bigcommerce: `meta[name='platform'][content^='bigcommerce.']`,
  Ecwid: `meta[content='ec-instant-site'][name='generator']`,
  Lightspeed: `link[href^='https://cdn.shoplightspeed.com'][rel='shortcut icon']`,
  Magento: `script[type='text/x-magento-init']`,
  Shopify: `script[id='shopify-features']`,
  Square: `meta[content='Square Online'][name='generator']`,
  Squarespace: `link[href^='https://images.squarespace-cdn.com'][rel='preconnect']`,
  Wix: `meta[content='Wix.com Website Builder'][name='generator']`,
  Shoplazza: `#shoplaza-section-header`,
  Weebly: `link[id='wsite-base-style'][rel='stylesheet'][type='text/css'][href^='//cdn2.editmysite.com']`,
  PrestaShop: `meta[content='PrestaShop'][name='generator']`,
  WooCommerce: `meta[name='generator'][content*='WooCommerce'], body.woocommerce .woocommerce-Price-amount.amount, style[id='woocommerce-inline-inline-css'][type='text/css']`
};
