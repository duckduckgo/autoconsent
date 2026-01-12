import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lausanne-tourisme.ch_25s', ['https://www.lausanne-tourisme.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
