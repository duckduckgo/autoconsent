import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_docs.rundeck.com_rjz', ['https://docs.rundeck.com/docs/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
