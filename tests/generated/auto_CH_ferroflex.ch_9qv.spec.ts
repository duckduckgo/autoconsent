import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ferroflex.ch_9qv', ['https://www.ferroflex.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
