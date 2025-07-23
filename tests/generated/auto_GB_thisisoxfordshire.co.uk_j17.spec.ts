import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thisisoxfordshire.co.uk_j17', ['https://www.thisisoxfordshire.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
