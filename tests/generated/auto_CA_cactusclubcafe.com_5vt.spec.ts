import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cactusclubcafe.com_5vt', ['https://www.cactusclubcafe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
