import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.usembassy.gov_3pi', ['https://de.usembassy.gov/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
