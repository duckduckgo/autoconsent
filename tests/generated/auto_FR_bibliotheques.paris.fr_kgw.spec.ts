import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bibliotheques.paris.fr_kgw', ['https://bibliotheques.paris.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
