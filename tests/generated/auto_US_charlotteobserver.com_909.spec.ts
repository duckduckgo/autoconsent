import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_charlotteobserver.com_909', ['https://www.charlotteobserver.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
