import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_feuer-fuchs.de_xqt', ['https://www.feuer-fuchs.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
