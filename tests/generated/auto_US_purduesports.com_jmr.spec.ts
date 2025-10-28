import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_purduesports.com_jmr', ['https://purduesports.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
