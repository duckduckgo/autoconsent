import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_agupubs.onlinelibrary.wiley.com_ade', ['https://agupubs.onlinelibrary.wiley.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
