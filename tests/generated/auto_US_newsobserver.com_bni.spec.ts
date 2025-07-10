import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_newsobserver.com_bni', ['https://www.newsobserver.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
