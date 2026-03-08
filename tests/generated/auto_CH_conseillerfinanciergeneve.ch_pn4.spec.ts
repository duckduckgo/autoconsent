import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_conseillerfinanciergeneve.ch_pn4', ['https://conseillerfinanciergeneve.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
