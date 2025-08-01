import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_frontlinewildfire.com_a9g', ['https://www.frontlinewildfire.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
