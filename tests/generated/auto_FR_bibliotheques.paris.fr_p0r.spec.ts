import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bibliotheques.paris.fr_p0r', ['https://bibliotheques.paris.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
