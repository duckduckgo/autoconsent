import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_buzzfeed.com_xo6', ['https://www.buzzfeed.com/uk'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
