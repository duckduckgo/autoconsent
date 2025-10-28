import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bartehrman.com_hme', ['https://www.bartehrman.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
