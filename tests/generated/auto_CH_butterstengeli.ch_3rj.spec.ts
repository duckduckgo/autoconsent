import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_butterstengeli.ch_3rj', ['https://butterstengeli.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
