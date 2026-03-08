import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_france.ebay.com_swa', ['https://france.ebay.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
