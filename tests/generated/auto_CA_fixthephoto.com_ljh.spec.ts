import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fixthephoto.com_ljh', ['https://fixthephoto.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
