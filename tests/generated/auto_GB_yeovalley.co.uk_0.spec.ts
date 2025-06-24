import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_yeovalley.co.uk_0', ['https://www.yeovalley.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
