import generateCMPTests from '../playwright/runner';

generateCMPTests('7plus', ['https://7plus.com.au/'], {
    testSelfTest: false,
    onlyRegions: ['US', 'GB', 'AU'],
});
