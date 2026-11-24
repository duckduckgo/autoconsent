import generateCMPTests from '../playwright/runner';

generateCMPTests('shopware5', [
    'https://battlemerchant.com/',
    'https://koesener.de/',
    'https://esmog-shop.com/',
    'https://ebike-solutions.com/',
]);

// Decline button hidden by the theme; saving the consent manager reloads the page before the self-test runs
generateCMPTests('shopware5', ['https://sportfits.de/', 'https://zazo.de/', 'https://outdoor-renner.de/'], {
    testSelfTest: false,
});
