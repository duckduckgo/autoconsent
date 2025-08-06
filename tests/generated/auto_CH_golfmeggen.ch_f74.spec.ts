import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_golfmeggen.ch_f74', ['https://www.golfmeggen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
