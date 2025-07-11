import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cardmarket.com_v83', ['https://www.cardmarket.com/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
