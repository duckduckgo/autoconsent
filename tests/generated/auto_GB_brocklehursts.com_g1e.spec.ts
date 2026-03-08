import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_brocklehursts.com_g1e', ['https://brocklehursts.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
