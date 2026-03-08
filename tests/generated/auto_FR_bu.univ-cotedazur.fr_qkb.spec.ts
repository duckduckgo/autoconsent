import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bu.univ-cotedazur.fr_qkb', ['https://bu.univ-cotedazur.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
