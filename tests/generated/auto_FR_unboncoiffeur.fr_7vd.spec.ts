import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_unboncoiffeur.fr_7vd', ['https://www.unboncoiffeur.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
