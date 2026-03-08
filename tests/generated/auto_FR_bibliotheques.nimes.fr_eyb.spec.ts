import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bibliotheques.nimes.fr_eyb', ['https://bibliotheques.nimes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
