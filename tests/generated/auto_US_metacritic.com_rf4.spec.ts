import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_metacritic.com_rf4', ['https://www.metacritic.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
