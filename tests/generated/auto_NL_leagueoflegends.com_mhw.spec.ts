import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_leagueoflegends.com_mhw', ['https://www.leagueoflegends.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
