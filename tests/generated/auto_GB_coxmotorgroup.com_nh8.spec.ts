import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_coxmotorgroup.com_nh8', ['https://coxmotorgroup.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
