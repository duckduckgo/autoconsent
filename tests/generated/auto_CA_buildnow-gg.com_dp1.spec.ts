import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_buildnow-gg.com_dp1', ['https://buildnow-gg.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
