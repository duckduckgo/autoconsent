import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_onthemarket.com_xhk', ['https://www.onthemarket.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
