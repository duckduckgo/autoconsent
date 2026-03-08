import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_developer.linkedin.com_6b3', ['https://developer.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
