import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bauchzentrum-bern.ch_gzv', ['https://bauchzentrum-bern.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
