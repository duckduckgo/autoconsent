import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_lakehouse.com_s1f', ['https://www.lakehouse.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
