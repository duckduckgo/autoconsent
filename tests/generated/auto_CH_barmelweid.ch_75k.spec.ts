import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_barmelweid.ch_75k', ['https://www.barmelweid.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
