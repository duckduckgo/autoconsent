import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_docs.redhat.com_pfs', ['https://docs.redhat.com/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
