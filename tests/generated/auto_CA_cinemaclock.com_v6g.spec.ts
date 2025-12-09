import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cinemaclock.com_v6g', ['https://www.cinemaclock.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
