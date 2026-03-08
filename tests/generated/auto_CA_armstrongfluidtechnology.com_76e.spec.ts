import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_armstrongfluidtechnology.com_76e', ['https://armstrongfluidtechnology.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
