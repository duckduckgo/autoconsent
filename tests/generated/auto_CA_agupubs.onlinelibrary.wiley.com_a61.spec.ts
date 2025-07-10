import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_agupubs.onlinelibrary.wiley.com_a61', ['https://agupubs.onlinelibrary.wiley.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
