import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_weathershop.co.uk_j9z', ['https://www.weathershop.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
