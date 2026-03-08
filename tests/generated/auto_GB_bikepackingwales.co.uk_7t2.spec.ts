import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bikepackingwales.co.uk_7t2', ['https://bikepackingwales.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
