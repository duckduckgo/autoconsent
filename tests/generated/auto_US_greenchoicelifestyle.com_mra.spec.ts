import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_greenchoicelifestyle.com_mra', ['https://greenchoicelifestyle.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
