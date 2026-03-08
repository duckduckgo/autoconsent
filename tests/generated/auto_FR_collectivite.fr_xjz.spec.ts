import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_collectivite.fr_xjz', ['https://collectivite.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
