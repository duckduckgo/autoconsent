import generateCMPTests from '../playwright/runner';

generateCMPTests('adblockplus', ['https://adblockplus.org/'], {
    testOptIn: true,
    testSelfTest: true,
    onlyRegions: ['US'],
});
