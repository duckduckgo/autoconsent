import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_qldnaturistassoc.org_k53', ['https://qldnaturistassoc.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
