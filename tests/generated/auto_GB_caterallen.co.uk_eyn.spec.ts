import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_caterallen.co.uk_eyn', ['https://www.caterallen.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
