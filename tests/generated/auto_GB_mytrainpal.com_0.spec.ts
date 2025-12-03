import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mytrainpal.com_0', ['https://www.mytrainpal.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
