import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cardmarket.com_xn5', ['https://www.cardmarket.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
