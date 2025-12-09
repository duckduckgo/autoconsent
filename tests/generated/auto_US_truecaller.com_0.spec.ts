import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_truecaller.com_0', ['https://www.truecaller.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
