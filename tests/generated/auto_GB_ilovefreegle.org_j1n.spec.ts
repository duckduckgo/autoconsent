import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ilovefreegle.org_j1n', ['https://www.ilovefreegle.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
