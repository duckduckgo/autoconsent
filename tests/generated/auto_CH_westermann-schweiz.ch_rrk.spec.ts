import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_westermann-schweiz.ch_rrk', ['https://www.westermann-schweiz.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
