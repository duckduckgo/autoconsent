import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_learn.ligonier.org_z47', ['https://learn.ligonier.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
