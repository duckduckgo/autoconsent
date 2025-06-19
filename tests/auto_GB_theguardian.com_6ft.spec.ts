import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_theguardian.com_6ft', ['https://www.theguardian.com/uk'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
