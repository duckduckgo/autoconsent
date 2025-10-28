import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_giallozafferano.it_d0r', ['https://www.giallozafferano.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
