import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_finimize.com_lyx', ['https://finimize.com/content/mozilla-names-ceo-to-drive-ai-into-firefoxs-future'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
