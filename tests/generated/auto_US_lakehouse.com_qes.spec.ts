import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_lakehouse.com_qes', ['https://www.lakehouse.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
