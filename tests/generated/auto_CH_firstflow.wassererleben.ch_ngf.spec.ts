import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_firstflow.wassererleben.ch_ngf', ['https://firstflow.wassererleben.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
