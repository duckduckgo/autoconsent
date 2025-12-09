import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_playitagainsports.com_0bf', ['https://playitagainsports.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
