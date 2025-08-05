import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fotokoch.de_403', ['https://www.fotokoch.de/en/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
