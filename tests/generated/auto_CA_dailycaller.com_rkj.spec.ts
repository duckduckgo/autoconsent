import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dailycaller.com_rkj', ['https://dailycaller.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
