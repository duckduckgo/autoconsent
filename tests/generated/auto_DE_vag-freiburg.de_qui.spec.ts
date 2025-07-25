import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vag-freiburg.de_qui', ['https://www.vag-freiburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
