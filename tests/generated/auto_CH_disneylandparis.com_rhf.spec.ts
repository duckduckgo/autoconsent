import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_disneylandparis.com_rhf', ['https://www.disneylandparis.com/market-selection/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
