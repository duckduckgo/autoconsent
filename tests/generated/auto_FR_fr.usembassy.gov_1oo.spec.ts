import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.usembassy.gov_1oo', ['https://fr.usembassy.gov/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
