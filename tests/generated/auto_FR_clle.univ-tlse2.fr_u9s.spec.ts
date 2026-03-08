import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_clle.univ-tlse2.fr_u9s', ['https://clle.univ-tlse2.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
