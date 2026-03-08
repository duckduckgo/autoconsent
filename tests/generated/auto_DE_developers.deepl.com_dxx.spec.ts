import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_developers.deepl.com_dxx', ['https://developers.deepl.com/docs/getting-started/intro'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
