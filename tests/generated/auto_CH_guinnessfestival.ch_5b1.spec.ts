import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_guinnessfestival.ch_5b1', ['https://guinnessfestival.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
