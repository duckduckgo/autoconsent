import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_artsudbury.org_e7i', ['https://artsudbury.org/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
