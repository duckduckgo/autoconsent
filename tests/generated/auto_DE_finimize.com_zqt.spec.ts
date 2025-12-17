import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_finimize.com_zqt', ['https://finimize.com/content/mozilla-names-ceo-to-drive-ai-into-firefoxs-future'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
