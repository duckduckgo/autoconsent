import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-lyon3.fr_aiz', ['https://www.univ-lyon3.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
