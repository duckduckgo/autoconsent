import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cardmarket.com_oxh', ['https://www.cardmarket.com/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
