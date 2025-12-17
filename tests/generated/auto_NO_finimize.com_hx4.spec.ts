import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_finimize.com_hx4', ['https://finimize.com/content/mozilla-names-ceo-to-drive-ai-into-firefoxs-future'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
