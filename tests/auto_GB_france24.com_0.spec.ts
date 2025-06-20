import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_france24.com_0', ['https://www.france24.com/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
