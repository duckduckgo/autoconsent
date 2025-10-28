import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ndzperformance.com_fek', ['https://ndzperformance.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
