import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sportingnews.com_dvh', ['https://www.sportingnews.com/us'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
