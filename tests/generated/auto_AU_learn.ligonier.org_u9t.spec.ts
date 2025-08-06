import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_learn.ligonier.org_u9t', ['https://learn.ligonier.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
