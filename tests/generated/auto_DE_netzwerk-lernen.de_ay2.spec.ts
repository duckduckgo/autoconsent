import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_netzwerk-lernen.de_ay2', ['https://www.netzwerk-lernen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
