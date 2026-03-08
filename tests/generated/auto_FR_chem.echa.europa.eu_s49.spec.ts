import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chem.echa.europa.eu_s49', ['https://chem.echa.europa.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
