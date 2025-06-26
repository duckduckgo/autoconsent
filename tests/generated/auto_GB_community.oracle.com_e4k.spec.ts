import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_community.oracle.com_e4k', ['https://community.oracle.com/hub/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
