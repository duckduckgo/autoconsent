import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dayz.fandom.com_x07', ['https://dayz.fandom.com/wiki/DayZ_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
