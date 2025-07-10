import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cruiseamerica.com_lcy', ['https://www.cruiseamerica.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
