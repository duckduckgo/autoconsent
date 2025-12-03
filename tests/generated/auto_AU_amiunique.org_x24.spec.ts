import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_amiunique.org_x24', ['https://amiunique.org/fingerprint'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
