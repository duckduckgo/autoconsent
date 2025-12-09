import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bourse.fortuneo.fr_hp1', ['https://bourse.fortuneo.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
