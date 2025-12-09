import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fotokoch.de_07f', ['https://www.fotokoch.de/en/index.html?pfad=index&rewrite=on'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
