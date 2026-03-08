import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_andreasgeering.ch_n5f', ['https://andreasgeering.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
