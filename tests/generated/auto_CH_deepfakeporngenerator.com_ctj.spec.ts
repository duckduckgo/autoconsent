import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_deepfakeporngenerator.com_ctj', ['https://deepfakeporngenerator.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
