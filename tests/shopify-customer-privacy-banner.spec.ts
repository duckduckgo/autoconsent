import generateCMPTests from '../playwright/runner';

generateCMPTests('shopify-customer-privacy-banner', ['https://store.leviton.com/collections/smart-load-center'], {
    onlyRegions: ['US', 'NA'],
});
