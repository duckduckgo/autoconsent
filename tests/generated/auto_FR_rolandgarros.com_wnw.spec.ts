import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rolandgarros.com_wnw', ['https://www.rolandgarros.com/fr-fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
