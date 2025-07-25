import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_manufactum.de_428', ['https://www.manufactum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
