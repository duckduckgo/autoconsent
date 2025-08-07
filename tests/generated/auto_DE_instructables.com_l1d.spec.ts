import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_instructables.com_l1d', ['https://www.instructables.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
