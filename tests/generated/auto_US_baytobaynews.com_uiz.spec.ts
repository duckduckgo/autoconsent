import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_baytobaynews.com_uiz', ['https://baytobaynews.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
