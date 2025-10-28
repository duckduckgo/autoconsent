import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zurucksetzen.de_l2p', ['https://www.zurucksetzen.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
