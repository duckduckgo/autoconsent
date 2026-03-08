import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bibliotheque.pully.ch_q3x', ['https://bibliotheque.pully.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
