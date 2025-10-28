import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_strasbourg.eu_ir9', ['https://www.strasbourg.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
