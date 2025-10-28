import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ewl-luzern.ch_2hv', ['https://www.ewl-luzern.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
