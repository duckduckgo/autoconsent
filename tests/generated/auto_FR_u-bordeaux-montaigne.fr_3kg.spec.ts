import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_u-bordeaux-montaigne.fr_3kg', ['https://www.u-bordeaux-montaigne.fr/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
