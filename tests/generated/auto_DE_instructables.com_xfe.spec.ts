import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_instructables.com_xfe', ['https://www.instructables.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
