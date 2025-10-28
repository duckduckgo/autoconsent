import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_goodnotes.com_gk2', ['https://www.goodnotes.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
