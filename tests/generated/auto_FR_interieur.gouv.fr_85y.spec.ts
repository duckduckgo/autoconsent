import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_interieur.gouv.fr_85y', ['https://www.interieur.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
