import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_deepl.com_0', ['https://www.deepl.com/en/translator'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
