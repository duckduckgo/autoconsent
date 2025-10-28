import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_gamecocksonline.com_1ze', ['https://gamecocksonline.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
