import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_5-minuten-jus.ch_klq', ['https://5-minuten-jus.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
