import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_parchment.com_7r7', ['https://www.parchment.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
