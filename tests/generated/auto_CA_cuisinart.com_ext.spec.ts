import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cuisinart.com_ext', ['https://www.cuisinart.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
