import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hochschwarzwald.de_zpm', ['https://www.hochschwarzwald.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
