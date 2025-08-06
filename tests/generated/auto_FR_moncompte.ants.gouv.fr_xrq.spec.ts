import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_moncompte.ants.gouv.fr_xrq', ['https://moncompte.ants.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
