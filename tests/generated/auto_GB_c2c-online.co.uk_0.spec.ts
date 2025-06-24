import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_c2c-online.co.uk_0', ['https://www.c2c-online.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
