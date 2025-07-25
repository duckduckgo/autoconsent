import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cic.fr_o2g', ['https://www.cic.fr/fr/particuliers.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
