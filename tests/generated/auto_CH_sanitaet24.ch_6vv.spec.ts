import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sanitaet24.ch_6vv', ['https://www.sanitaet24.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
