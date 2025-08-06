import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vag-freiburg.de_st9', ['https://www.vag-freiburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
