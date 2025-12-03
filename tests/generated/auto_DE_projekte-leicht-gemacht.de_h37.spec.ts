import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_projekte-leicht-gemacht.de_h37', ['https://projekte-leicht-gemacht.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
