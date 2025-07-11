import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_northwichguardian.co.uk_u1d', ['https://www.northwichguardian.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
