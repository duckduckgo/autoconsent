import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cpaexamsmastery.com_8im', ['https://cpaexamsmastery.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
