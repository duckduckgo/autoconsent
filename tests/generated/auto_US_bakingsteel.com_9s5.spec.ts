import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bakingsteel.com_9s5', ['https://bakingsteel.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
