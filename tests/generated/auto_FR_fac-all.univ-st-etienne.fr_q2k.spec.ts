import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fac-all.univ-st-etienne.fr_q2k', ['https://fac-all.univ-st-etienne.fr/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
