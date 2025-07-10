import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_globenewswire.com_otv', ['https://www.globenewswire.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
