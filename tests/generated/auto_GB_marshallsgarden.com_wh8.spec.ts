import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_marshallsgarden.com_wh8', ['https://marshallsgarden.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
