import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wellcarenow.com_1is', ['https://www.wellcarenow.com/b/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
