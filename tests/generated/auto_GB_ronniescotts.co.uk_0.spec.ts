import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ronniescotts.co.uk_0', ['https://www.ronniescotts.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
