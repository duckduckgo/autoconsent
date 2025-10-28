import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_governmentjobs.com_5e6', ['https://www.governmentjobs.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
