import generateCMPTests from '../playwright/runner';

// adidas' in-house "Glass" cookie-consent microfrontend, shared across all adidas storefronts.
generateCMPTests('adidas-glass', ['https://www.adidas.com/us/cleats', 'https://www.adidas.de/', 'https://www.adidas.co.uk/'], {
    testOptIn: false,
});
