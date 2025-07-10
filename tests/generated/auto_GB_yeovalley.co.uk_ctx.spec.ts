import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_yeovalley.co.uk_ctx', ['https://www.yeovalley.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
