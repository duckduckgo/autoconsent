import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_infosenior.ch_2yf', ['https://www.infosenior.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
