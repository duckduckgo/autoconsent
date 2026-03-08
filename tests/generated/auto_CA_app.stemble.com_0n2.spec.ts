import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_app.stemble.com_0n2', ['https://app.stemble.com/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
