import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_mychicagosteak.com_jbc', ['https://www.mychicagosteak.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
