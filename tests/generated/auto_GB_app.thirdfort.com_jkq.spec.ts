import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_app.thirdfort.com_jkq', ['https://app.thirdfort.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
