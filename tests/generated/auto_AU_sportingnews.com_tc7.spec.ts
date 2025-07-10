import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_sportingnews.com_tc7', ['https://www.sportingnews.com/au/nba?gr=www'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
