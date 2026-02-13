import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cinemaclock.com_vci', ['https://www.cinemaclock.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
