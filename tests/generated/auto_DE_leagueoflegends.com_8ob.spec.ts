import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_leagueoflegends.com_8ob', ['https://www.leagueoflegends.com/de-de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
