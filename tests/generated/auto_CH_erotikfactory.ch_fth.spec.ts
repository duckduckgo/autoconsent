import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_erotikfactory.ch_fth', ['https://erotikfactory.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
