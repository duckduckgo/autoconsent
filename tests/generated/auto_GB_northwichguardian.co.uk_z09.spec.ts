import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_northwichguardian.co.uk_z09', ['https://www.northwichguardian.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
