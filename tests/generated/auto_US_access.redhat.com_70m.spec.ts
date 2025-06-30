import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_access.redhat.com_70m', ['https://access.redhat.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
