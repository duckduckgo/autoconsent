import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.diskinternals.com_1le', ['https://fr.diskinternals.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
