import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_benzobuddies.org_n2h', ['https://benzobuddies.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
