import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_online-pharmacy4u.co.uk_iag', ['https://online-pharmacy4u.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
