import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_compact-online.de_toa', ['https://www.compact-online.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
