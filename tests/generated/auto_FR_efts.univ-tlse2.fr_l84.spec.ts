import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_efts.univ-tlse2.fr_l84', ['https://efts.univ-tlse2.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
