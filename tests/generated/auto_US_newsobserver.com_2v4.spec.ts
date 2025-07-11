import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_newsobserver.com_2v4', ['https://www.newsobserver.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
