import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_motordoctor.fr_ozj', ['https://www.motordoctor.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
