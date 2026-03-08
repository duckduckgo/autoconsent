import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_arresteddevelopment.fandom.com_c7p', ['https://arresteddevelopment.fandom.com/wiki/Main_Page'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
