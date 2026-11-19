import generateCMPTests from '../playwright/runner';

generateCMPTests('samsung-account', ['https://account.samsung.com/'], {
    skipRegions: ['US'],
});
