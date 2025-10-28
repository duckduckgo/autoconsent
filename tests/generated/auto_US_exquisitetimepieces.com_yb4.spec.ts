import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_exquisitetimepieces.com_yb4', ['https://www.exquisitetimepieces.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
