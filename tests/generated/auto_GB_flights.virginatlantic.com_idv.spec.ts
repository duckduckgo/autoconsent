import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_flights.virginatlantic.com_idv', ['https://flights.virginatlantic.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
