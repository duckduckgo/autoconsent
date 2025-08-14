import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eniplenitude.fr_pd2', ['https://www.eniplenitude.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
