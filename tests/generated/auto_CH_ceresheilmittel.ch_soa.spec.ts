import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ceresheilmittel.ch_soa', ['https://www.ceresheilmittel.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
