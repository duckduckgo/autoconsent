import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cardmarket.com_3sg', ['https://www.cardmarket.com/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
