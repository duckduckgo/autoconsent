import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_pro-football-reference.com_50f', ['https://www.pro-football-reference.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
