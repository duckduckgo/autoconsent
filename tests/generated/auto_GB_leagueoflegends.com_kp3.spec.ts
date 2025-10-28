import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_leagueoflegends.com_kp3', ['https://www.leagueoflegends.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
