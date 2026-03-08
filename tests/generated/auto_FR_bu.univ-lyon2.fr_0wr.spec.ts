import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bu.univ-lyon2.fr_0wr', ['https://bu.univ-lyon2.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
