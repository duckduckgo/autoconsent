import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_riotgames.com_3nf', ['https://www.riotgames.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
