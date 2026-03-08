import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bleach.fandom.com_iiw', ['https://bleach.fandom.com/wiki/Bleach_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
