import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bu.univ-lyon3.fr_5ds', ['https://bu.univ-lyon3.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
