import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schwabach.de_fjr', ['https://www.schwabach.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
