import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thisisoxfordshire.co.uk_ifq', ['https://www.thisisoxfordshire.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
