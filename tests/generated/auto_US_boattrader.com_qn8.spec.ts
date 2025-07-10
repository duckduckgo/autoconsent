import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_boattrader.com_qn8', ['https://www.boattrader.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
