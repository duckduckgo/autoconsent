import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_commoditypriceapi.com_39t', ['https://commoditypriceapi.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
