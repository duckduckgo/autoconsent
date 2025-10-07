import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_caterallen.co.uk_t24', ['https://www.caterallen.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
