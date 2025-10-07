import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_brightondome.org_f58', ['https://brightondome.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
