import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hochschwarzwald.de_ta4', ['https://www.hochschwarzwald.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
