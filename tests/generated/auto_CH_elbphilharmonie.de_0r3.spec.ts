import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_elbphilharmonie.de_0r3', ['https://www.elbphilharmonie.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
