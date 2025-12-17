import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_finimize.com_90i', ['https://finimize.com/content/mozilla-names-ceo-to-drive-ai-into-firefoxs-future'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
