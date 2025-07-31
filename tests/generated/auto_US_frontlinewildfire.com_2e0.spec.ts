import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_frontlinewildfire.com_2e0', ['https://www.frontlinewildfire.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
