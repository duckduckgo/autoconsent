import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vistaprint.ch_3nq', ['https://www.vistaprint.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
