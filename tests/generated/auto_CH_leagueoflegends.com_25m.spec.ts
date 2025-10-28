import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_leagueoflegends.com_25m', ['https://www.leagueoflegends.com/de-de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
