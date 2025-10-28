import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ilfattoquotidiano.it_2hs', ['https://www.ilfattoquotidiano.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
