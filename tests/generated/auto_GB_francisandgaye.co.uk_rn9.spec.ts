import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_francisandgaye.co.uk_rn9', ['https://www.francisandgaye.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
