import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_access.redhat.com_tze', ['https://access.redhat.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
