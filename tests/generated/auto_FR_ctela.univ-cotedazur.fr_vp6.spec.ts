import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ctela.univ-cotedazur.fr_vp6', ['https://ctela.univ-cotedazur.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
