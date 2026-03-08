import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bibliotheques.sherbrooke.ca_x15', ['https://bibliotheques.sherbrooke.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
