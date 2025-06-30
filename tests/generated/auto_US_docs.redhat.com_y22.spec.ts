import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_docs.redhat.com_y22', ['https://docs.redhat.com/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
