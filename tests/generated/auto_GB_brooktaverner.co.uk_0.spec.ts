import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_brooktaverner.co.uk_0', ['https://www.brooktaverner.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
