import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vag-freiburg.de_khw', ['https://www.vag-freiburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
