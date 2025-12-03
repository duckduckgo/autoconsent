import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_clients.cdiscount.com_dpm', ['https://order.cdiscount.com/Account/LoginLight.html?referrer='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
