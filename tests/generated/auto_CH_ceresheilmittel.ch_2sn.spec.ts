import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ceresheilmittel.ch_2sn', ['https://www.ceresheilmittel.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
