import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lausanne-tourisme.ch_o6d', ['https://www.lausanne-tourisme.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
