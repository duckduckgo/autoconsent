import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cinemaregency.ch_7lr', ['https://cinemaregency.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
