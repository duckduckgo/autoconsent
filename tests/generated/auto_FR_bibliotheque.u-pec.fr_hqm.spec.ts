import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bibliotheque.u-pec.fr_hqm', ['https://bibliotheque.u-pec.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
