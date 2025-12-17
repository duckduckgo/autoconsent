import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_finimize.com_3bc', ['https://finimize.com/content/mozilla-names-ceo-to-drive-ai-into-firefoxs-future'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
