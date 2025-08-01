import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_projekte-leicht-gemacht.de_bwk', ['https://projekte-leicht-gemacht.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
