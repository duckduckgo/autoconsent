import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_saffronbs.co.uk_b3z', ['https://www.saffronbs.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
