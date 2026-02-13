import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_greenfieldfestival.ch_9ty', ['https://greenfieldfestival.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
