import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_en.ryfylke-adventures.com_qlx', ['https://en.ryfylke-adventures.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
