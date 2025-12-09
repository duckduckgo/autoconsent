import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bartli-socken.ch_j7f', ['https://www.bartli-socken.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
