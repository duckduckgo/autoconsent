import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eclla.univ-st-etienne.fr_eye', ['https://eclla.univ-st-etienne.fr/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
