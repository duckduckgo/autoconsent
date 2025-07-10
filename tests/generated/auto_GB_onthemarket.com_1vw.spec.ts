import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_onthemarket.com_1vw', ['https://www.onthemarket.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
