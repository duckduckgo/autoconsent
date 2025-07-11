import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hyperdrug.co.uk_n5c', ['https://hyperdrug.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
