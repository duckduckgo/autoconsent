import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gabrielweinberg.com_56i', ['https://gabrielweinberg.com/p/9-ways-duckduckgo-differs-from-google-ai-overviews'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
