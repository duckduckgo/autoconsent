import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wiki.leagueoflegends.com_1nr', ['https://wiki.leagueoflegends.com/en-us/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
