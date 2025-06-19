import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_mountsinai.org_4yk', ['https://www.mountsinai.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
