import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_translink.co.uk_u44', ['https://www.translink.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
