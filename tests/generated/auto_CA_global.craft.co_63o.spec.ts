import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_global.craft.co_63o', ['https://global.craft.co/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
