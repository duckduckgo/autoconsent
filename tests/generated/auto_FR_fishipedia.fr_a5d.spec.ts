import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fishipedia.fr_a5d', ['https://www.fishipedia.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
