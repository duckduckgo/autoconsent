import generateCMPTests from '../playwright/runner';

generateCMPTests('msm-cookie-consent', ['https://moneysavingexpert.com', 'https://www.moneysupermarket.com/'], {
    skipRegions: ['US', 'FR', 'DE'],
});
