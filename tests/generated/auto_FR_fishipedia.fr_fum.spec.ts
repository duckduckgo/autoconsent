import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fishipedia.fr_fum', ['https://www.fishipedia.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
