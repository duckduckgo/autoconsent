import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_instructables.com_nhz', ['https://www.instructables.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
