import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_acehardware.com_4s1', ['https://www.acehardware.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
