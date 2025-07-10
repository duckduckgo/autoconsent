import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_mynorthwest.com_ozi', ['https://mynorthwest.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
