import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tintenmarkt.ch_5ay', ['https://www.tintenmarkt.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
