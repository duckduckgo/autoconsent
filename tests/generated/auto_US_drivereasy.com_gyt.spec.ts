import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_drivereasy.com_gyt', ['https://www.drivereasy.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
