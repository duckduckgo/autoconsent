import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_mountsinai.org_bgh', ['https://www.mountsinai.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
