import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_leagueoflegends.com_bgv', ['https://www.leagueoflegends.com/en-us/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
