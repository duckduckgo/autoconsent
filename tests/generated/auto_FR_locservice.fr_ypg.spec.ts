import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_locservice.fr_ypg', ['https://www.locservice.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
