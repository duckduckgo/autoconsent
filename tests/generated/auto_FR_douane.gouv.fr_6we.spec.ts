import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_douane.gouv.fr_6we', ['https://www.douane.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
