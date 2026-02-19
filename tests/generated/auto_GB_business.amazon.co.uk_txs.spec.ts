import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_business.amazon.co.uk_txs', ['https://business.amazon.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
