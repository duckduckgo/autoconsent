import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fotokoch.de_l0t', ['https://www.fotokoch.de/en/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
