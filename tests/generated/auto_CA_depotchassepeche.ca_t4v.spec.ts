import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_depotchassepeche.ca_t4v', ['https://depotchassepeche.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
