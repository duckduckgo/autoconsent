import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_caterallen.co.uk_4lf', ['https://www.caterallen.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
