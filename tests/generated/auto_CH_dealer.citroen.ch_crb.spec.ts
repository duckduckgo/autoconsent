import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dealer.citroen.ch_crb', ['https://dealer.citroen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
