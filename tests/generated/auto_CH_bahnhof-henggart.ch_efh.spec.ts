import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bahnhof-henggart.ch_efh', ['https://bahnhof-henggart.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
