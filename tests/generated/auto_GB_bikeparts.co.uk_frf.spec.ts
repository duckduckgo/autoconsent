import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bikeparts.co.uk_frf', ['https://www.bikeparts.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
