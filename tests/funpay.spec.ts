import generateCMPTests from '../playwright/runner';

generateCMPTests('funpay', ['https://funpay.com/'], {
    skipRegions: ['US', 'JP'],
});
