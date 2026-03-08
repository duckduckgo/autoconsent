import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_elite-dangerous.fandom.com_rpy', ['https://elite-dangerous.fandom.com/wiki/Elite_Dangerous_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
