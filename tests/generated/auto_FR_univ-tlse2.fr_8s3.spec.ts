import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-tlse2.fr_8s3', ['https://www.univ-tlse2.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
