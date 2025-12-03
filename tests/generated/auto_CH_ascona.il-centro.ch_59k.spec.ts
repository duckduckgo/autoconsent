import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ascona.il-centro.ch_59k', ['https://ascona.il-centro.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
