import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ceresheilmittel.ch_ltz', ['https://www.ceresheilmittel.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
