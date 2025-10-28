import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_marshallsgarden.com_9mp', ['https://marshallsgarden.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
