import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_outdoor.glarnerland.ch_6in', ['https://outdoor.glarnerland.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
