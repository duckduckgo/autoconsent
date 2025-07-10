import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sportsmansguide.com_q80', ['https://www.sportsmansguide.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
