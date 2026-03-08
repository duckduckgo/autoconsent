import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_aslinteractive.com_cqs', ['https://aslinteractive.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
