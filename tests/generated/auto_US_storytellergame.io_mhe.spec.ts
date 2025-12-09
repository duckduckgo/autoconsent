import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_storytellergame.io_mhe', ['https://storytellergame.io/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
