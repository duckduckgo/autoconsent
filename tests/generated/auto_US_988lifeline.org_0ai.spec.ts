import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_988lifeline.org_0ai', ['https://988lifeline.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
