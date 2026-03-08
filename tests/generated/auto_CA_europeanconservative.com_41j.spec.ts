import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_europeanconservative.com_41j', ['https://europeanconservative.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
