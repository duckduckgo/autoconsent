import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_elbphilharmonie.de_s2e', ['https://www.elbphilharmonie.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
