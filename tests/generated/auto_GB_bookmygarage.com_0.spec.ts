import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bookmygarage.com_0', ['https://bookmygarage.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
