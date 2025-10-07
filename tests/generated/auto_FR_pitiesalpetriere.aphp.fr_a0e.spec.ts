import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pitiesalpetriere.aphp.fr_a0e', ['https://pitiesalpetriere.aphp.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
