import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cardmarket.com_hfd', ['https://www.cardmarket.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
