import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_studium.umontreal.ca_ev4', ['https://studium.umontreal.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
