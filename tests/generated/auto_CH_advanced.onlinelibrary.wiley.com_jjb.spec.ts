import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_advanced.onlinelibrary.wiley.com_jjb', ['https://advanced.onlinelibrary.wiley.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
