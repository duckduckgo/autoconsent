import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_riotgames.com_fzx', ['https://www.riotgames.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
