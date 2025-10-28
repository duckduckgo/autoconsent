import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bikesinstock.co.uk_v1l', ['https://www.bikesinstock.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
