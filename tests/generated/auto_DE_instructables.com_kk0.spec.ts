import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_instructables.com_kk0', ['https://www.instructables.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
