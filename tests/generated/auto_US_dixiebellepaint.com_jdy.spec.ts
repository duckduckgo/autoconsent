import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dixiebellepaint.com_jdy', ['https://dixiebellepaint.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
