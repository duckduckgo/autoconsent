import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_frontlinewildfire.com_utf', ['https://www.frontlinewildfire.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
