import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_poolsuppliescanada.ca_cix', ['https://www.poolsuppliescanada.ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
