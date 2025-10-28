import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_order-order.com_gpj', ['https://order-order.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
