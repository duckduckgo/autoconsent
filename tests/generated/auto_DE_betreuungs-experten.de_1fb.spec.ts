import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_betreuungs-experten.de_1fb', ['https://betreuungs-experten.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
