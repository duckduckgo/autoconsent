import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_gocivilairpatrol.com_0', ['https://www.gocivilairpatrol.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
