import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_blackcircles.com_8u1', ['https://www.blackcircles.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
