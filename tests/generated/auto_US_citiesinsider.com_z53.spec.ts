import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_citiesinsider.com_z53', ['https://citiesinsider.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
