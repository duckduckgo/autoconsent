import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_learn.ligonier.org_nlk', ['https://learn.ligonier.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
