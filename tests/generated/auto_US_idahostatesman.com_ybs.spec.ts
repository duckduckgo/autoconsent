import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_idahostatesman.com_ybs', ['https://www.idahostatesman.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
