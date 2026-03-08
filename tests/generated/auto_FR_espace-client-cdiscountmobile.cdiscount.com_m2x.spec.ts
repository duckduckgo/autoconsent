import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_espace-client-cdiscountmobile.cdiscount.com_m2x', ['https://espace-client-cdiscountmobile.cdiscount.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
