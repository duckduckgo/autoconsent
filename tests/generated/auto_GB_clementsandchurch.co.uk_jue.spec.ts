import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_clementsandchurch.co.uk_jue', ['https://clementsandchurch.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
