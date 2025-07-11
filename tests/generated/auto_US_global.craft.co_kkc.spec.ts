import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_global.craft.co_kkc', ['https://global.craft.co/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
