import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_idahostatesman.com_iwr', ['https://www.idahostatesman.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
