import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_beyondcanon.com_0g3', ['https://beyondcanon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
