import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_learn.ligonier.org_88z', ['https://learn.ligonier.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
