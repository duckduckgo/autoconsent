import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_eclipseholsters.com_xnj', ['https://eclipseholsters.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
