import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bibliotheque.toulouse.fr_zff', ['https://bibliotheque.toulouse.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
