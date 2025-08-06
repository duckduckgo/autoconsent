import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-tlse2.fr_g15', ['https://www.univ-tlse2.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
