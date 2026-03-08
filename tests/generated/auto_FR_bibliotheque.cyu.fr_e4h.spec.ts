import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bibliotheque.cyu.fr_e4h', ['https://bibliotheque.cyu.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
