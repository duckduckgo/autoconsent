import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_silber-corner.de_t1f', ['https://www.silber-corner.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
