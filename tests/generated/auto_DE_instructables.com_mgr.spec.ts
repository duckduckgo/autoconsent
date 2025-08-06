import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_instructables.com_mgr', ['https://www.instructables.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
