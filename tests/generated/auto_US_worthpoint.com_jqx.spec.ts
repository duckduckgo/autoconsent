import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_worthpoint.com_jqx', ['https://www.worthpoint.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
