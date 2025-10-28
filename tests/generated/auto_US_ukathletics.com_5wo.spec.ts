import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ukathletics.com_5wo', ['https://ukathletics.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
