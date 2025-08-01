import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uni-bielefeld.de_fd3', ['https://www.uni-bielefeld.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
