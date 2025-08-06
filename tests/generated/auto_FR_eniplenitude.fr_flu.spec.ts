import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eniplenitude.fr_flu', ['https://www.eniplenitude.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
