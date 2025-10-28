import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_leagueoflegends.com_ibd', ['https://www.leagueoflegends.com/en-au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
