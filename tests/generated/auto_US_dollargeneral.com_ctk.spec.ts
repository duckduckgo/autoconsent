import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dollargeneral.com_ctk', ['https://www.dollargeneral.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
