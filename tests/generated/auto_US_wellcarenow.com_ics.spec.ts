import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wellcarenow.com_ics', ['https://www.wellcarenow.com/b/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
