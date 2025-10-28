import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_for-sale.co.uk_650', ['https://www.for-sale.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
