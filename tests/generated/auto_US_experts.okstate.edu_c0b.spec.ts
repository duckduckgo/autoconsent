import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_experts.okstate.edu_c0b', ['https://experts.okstate.edu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
