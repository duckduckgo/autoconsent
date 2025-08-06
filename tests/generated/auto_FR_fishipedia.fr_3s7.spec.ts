import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fishipedia.fr_3s7', ['https://www.fishipedia.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
