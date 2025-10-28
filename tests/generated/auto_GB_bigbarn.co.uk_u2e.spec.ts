import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bigbarn.co.uk_u2e', ['https://www.bigbarn.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
