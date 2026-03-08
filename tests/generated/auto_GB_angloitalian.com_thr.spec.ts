import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_angloitalian.com_thr', ['https://angloitalian.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
