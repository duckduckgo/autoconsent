import generateCMPTests from '../playwright/runner';

generateCMPTests('leviton-store-shopify-privacy-banner', ['https://store.leviton.com/collections/smart-load-center'], {
    onlyRegions: ['US'],
});
