import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_counterculturecoffee.com_v3c', ['https://counterculturecoffee.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
