import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_iledefrance.ars.sante.fr_ijp', ['https://www.iledefrance.ars.sante.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
