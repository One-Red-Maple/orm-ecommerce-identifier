export var platforms = {
  Bigcommerce: `meta[name='platform'][content^='bigcommerce.']`,
  Ecwid: `meta[content='ec-instant-site'][name='generator']`,
  Lightspeed: `link[href^='https://cdn.shoplightspeed.com'][rel='shortcut icon']`,
  Magento: `script[type='text/x-magento-init']`,
  Shopify: `link[href^='https://cdn.shopify.com'][rel='preconnect']`,
  Square: `meta[content='Square Online'][name='generator']`,
  Squarespace: `link[href^='https://images.squarespace-cdn.com'][rel='preconnect']`,
  Wix: `meta[content='Wix.com Website Builder'][name='generator']`,
  Shoplazza: `img[src^='https://cdn.shoplazza.com/']`,
  Weebly: `link[id='wsite-base-style'][rel='stylesheet'][type='text/css'][href^='//cdn2.editmysite.com']`,
  PrestaShop: `script:contains('var prestashop')`,
  WooCommerce: function($:any) {
    return $('.woocommerce-Price-amount.amount').length > 0;
  }
};
