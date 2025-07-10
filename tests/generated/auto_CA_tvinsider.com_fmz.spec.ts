import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tvinsider.com_fmz', ['https://www.tvinsider.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
