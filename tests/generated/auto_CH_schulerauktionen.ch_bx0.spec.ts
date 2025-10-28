import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schulerauktionen.ch_bx0', ['https://www.schulerauktionen.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
