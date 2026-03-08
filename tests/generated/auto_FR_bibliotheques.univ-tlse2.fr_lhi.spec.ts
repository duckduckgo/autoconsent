import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bibliotheques.univ-tlse2.fr_lhi', ['https://bibliotheques.univ-tlse2.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
