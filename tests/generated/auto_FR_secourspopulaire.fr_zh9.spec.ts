import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_secourspopulaire.fr_zh9', ['https://www.secourspopulaire.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
