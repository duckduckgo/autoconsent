import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_parishabitat.fr_gjq', ['https://www.parishabitat.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
