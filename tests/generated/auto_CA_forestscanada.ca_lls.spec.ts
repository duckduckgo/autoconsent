import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_forestscanada.ca_lls', ['https://forestscanada.ca/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
