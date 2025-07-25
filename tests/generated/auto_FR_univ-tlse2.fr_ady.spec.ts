import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-tlse2.fr_ady', ['https://www.univ-tlse2.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
