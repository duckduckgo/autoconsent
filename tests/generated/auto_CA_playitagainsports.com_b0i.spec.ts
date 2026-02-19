import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_playitagainsports.com_b0i', ['https://playitagainsports.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
