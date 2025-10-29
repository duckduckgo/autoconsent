import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_mysextoyguide.com_cyo', ['https://www.mysextoyguide.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
