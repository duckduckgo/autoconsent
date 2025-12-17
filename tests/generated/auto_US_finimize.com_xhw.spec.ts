import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_finimize.com_xhw', ['https://finimize.com/content/mozilla-names-ceo-to-drive-ai-into-firefoxs-future'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
