import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_experience.com_b4x', ['https://www.experience.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
