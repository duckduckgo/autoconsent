import generateCMPTests from '../playwright/runner';

generateCMPTests('shopping-canada', ['https://www.shopping-canada.com/'], {
    testOptIn: false,
    simulateInteraction: true,
    onlyRegions: ['US', 'CA'],
});
