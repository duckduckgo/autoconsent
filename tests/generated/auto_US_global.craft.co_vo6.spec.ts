import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_global.craft.co_vo6', ['https://global.craft.co/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
