import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eshop.wurth.be_ick', ['https://eshop.wurth.be/nl/NL/EUR/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
