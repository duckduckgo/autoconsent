import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_app.mon-producteur.ch_sdb', ['https://app.mon-producteur.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
