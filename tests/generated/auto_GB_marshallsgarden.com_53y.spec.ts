import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_marshallsgarden.com_53y', ['https://marshallsgarden.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
