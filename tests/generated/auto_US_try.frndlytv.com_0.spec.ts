import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_try.frndlytv.com_0', ['https://try.frndlytv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
