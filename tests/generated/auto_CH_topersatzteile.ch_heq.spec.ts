import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_topersatzteile.ch_heq', ['https://www.topersatzteile.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
