import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_minisforum.com_7oa', ['https://www.minisforum.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
