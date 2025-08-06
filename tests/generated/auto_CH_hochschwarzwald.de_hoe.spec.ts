import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hochschwarzwald.de_hoe', ['https://www.hochschwarzwald.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
