import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_eurocodeapplied.com_ppg', ['https://eurocodeapplied.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
