import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_lakehouse.com_o3b', ['https://www.lakehouse.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
