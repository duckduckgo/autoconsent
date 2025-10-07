import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_altemarkthalle.ch_mdb', ['https://altemarkthalle.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
