import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_leedsunited.com_qpx', ['https://www.leedsunited.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
