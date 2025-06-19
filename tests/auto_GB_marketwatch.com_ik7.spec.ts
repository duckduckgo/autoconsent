import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_marketwatch.com_ik7', ['https://www.marketwatch.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
