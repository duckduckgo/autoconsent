import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_elbphilharmonie.de_wuv', ['https://www.elbphilharmonie.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
