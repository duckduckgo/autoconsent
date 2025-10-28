import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_elections.interieur.gouv.fr_3li', ['https://www.elections.interieur.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
