import generateCMPTests from '../playwright/runner';

// The banner is not shown in AU and CA.
generateCMPTests('woo-commerce-com', ['https://woocommerce.com/'], {
    skipRegions: ['AU', 'CA'],
});
