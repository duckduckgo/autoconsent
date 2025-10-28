import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_newsobserver.com_yb4', ['https://www.newsobserver.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
