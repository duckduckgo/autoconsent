import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_order.cdiscount.com_1e4', ['https://order.cdiscount.com/Account/LoginLight.html?referrer='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
