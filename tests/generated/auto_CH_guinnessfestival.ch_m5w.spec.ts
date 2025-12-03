import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_guinnessfestival.ch_m5w', ['https://guinnessfestival.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
