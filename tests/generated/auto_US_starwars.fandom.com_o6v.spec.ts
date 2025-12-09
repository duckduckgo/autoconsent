import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_starwars.fandom.com_o6v', ['https://starwars.fandom.com/wiki/Main_Page'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
