import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lescuristes.fr_gws', ['https://www.lescuristes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
