import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_elbphilharmonie.de_ayq', ['https://www.elbphilharmonie.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
