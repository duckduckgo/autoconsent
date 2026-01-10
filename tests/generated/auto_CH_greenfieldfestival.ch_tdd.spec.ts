import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_greenfieldfestival.ch_tdd', ['https://greenfieldfestival.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
