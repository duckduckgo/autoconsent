import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_compact-online.de_r6l', ['https://www.compact-online.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
