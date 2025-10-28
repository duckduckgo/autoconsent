import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fitnesspark.ch_y6u', ['https://www.fitnesspark.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
