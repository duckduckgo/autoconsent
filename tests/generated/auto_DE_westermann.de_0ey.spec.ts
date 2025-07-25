import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_westermann.de_0ey', ['https://www.westermann.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
