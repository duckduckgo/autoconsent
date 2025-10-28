import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_monarchmoney.com_onl', ['https://www.monarch.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
