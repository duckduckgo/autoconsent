import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_careproduct.ch_o28', ['https://www.careproduct.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
