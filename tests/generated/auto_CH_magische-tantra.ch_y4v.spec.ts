import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_magische-tantra.ch_y4v', ['https://magische-tantra.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
