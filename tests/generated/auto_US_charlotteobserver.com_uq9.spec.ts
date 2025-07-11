import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_charlotteobserver.com_uq9', ['https://www.charlotteobserver.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
