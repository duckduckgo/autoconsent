import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_grand-est.ars.sante.fr_afy', ['https://www.grand-est.ars.sante.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
