import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_careers.ucb.com_2ij', ['https://careers.ucb.com/global/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
