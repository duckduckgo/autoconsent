import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_einwandern-schweiz.ch_frl', ['https://einwandern-schweiz.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
