import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_toponymie.gouv.qc.ca_n7e', ['https://toponymie.gouv.qc.ca/ct/accueil.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
