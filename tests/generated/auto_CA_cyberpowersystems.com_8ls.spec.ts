import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cyberpowersystems.com_8ls', ['https://www.cyberpowersystems.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
