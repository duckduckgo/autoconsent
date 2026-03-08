import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_framespa.univ-tlse2.fr_ajz', ['https://framespa.univ-tlse2.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
