import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_biu-cujas.univ-paris1.fr_npp', ['https://biu-cujas.univ-paris1.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
