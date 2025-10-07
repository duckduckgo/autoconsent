import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_disneylandparis.com_06i', ['https://www.disneylandparis.com/market-selection/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
