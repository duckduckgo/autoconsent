import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ersatzteileshop.de_g8x', ['https://www.ersatzteileshop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
