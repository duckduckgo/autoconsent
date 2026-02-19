import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_euautopieces.fr_xav', ['https://www.euautopieces.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
