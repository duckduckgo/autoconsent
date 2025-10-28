import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_secretfacts.org_9dq', ['https://secretfacts.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
