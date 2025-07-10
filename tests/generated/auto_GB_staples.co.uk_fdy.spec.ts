import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_staples.co.uk_fdy', ['https://www.staples.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
