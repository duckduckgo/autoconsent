import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'shopify-dux',
    [
        'https://shop.app/',
        'https://www.shopify.com/uk',
        'https://apps.shopify.com/',
        'https://shopify.dev/docs',
        'https://themes.shopify.com/',
    ],
    {
        skipRegions: ['US'],
    },
);
