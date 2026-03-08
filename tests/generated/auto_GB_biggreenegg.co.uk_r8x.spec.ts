import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_biggreenegg.co.uk_r8x', ['https://biggreenegg.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
