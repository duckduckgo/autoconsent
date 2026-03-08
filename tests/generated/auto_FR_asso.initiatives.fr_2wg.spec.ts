import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_asso.initiatives.fr_2wg', ['https://asso.initiatives.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
