import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_seascanner.co.uk_lc4', ['https://www.seascanner.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
