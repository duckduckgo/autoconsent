import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_freedom-leisure.co.uk_97y', ['https://www.freedom-leisure.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
