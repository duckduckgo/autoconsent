import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_careers.mediamarktsaturn.com_5dh', ['https://careers.mediamarktsaturn.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
