import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_felgen-schweiz.ch_cwl', ['https://felgen-schweiz.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
