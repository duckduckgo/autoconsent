import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lloydmotorgroup.com_mp1', ['https://www.lloydmotorgroup.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
