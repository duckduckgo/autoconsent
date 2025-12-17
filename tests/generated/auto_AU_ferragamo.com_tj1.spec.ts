import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ferragamo.com_tj1', ['https://www.ferragamo.com/shop/us/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
