import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ent.univ-lemans.fr_2by', ['https://ent.univ-lemans.fr/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
