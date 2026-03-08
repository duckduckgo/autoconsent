import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_das-notariat.ch_9xf', ['https://das-notariat.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
