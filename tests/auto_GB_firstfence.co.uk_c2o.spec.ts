import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_firstfence.co.uk_c2o', ['https://firstfence.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
