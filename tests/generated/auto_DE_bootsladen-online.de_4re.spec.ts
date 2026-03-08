import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bootsladen-online.de_4re', ['https://bootsladen-online.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
