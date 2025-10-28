import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lamanchelibre.fr_jp8', ['https://www.lamanchelibre.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
