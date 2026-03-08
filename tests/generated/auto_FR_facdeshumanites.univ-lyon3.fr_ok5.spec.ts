import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_facdeshumanites.univ-lyon3.fr_ok5', ['https://facdeshumanites.univ-lyon3.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
