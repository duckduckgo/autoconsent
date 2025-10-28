import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gouts-et-terroirs.ch_eb5', ['https://www.gouts-et-terroirs.ch/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
