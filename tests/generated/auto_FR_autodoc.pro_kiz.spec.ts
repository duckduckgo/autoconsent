import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_autodoc.pro_kiz', ['https://autodoc.pro/fr-FR/signin'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
