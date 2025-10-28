import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_nantelmusique.ca_sm3', ['https://www.nantelmusique.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
