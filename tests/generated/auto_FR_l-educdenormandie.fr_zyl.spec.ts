import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_l-educdenormandie.fr_zyl', ['https://www.l-educdenormandie.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
