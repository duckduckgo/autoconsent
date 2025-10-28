import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_leagueoflegends.com_97p', ['https://www.leagueoflegends.com/fr-fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
