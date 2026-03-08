import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_forum.carport-diagnose.de_fh6', ['https://forum.carport-diagnose.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
