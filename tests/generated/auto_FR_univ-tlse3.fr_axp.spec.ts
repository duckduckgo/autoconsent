import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-tlse3.fr_axp', ['https://www.univ-tlse3.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
