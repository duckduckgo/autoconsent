import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_declaration-educateur.sports.gouv.fr_2g0', ['https://declaration-educateur.sports.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
