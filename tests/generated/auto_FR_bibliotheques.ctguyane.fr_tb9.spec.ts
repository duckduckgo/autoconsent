import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bibliotheques.ctguyane.fr_tb9', ['https://bibliotheques.ctguyane.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
