import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_francisandgaye.co.uk_m1d', ['https://www.francisandgaye.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
