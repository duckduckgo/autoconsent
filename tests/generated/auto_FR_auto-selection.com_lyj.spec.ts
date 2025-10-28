import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_auto-selection.com_lyj', ['https://www.auto-selection.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
