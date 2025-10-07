import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_onestream.co.uk_dpx', ['https://onestream.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
