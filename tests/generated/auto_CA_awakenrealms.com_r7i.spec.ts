import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_awakenrealms.com_r7i', ['https://awakenrealms.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
