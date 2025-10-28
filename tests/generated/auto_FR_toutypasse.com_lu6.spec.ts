import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_toutypasse.com_lu6', ['https://www.toutypasse.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
