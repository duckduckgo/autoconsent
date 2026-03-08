import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_frauenpraxis-alesa.ch_g1w', ['https://frauenpraxis-alesa.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
