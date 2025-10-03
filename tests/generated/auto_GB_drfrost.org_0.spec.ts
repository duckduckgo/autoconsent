import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_drfrost.org_0', ['https://www.drfrost.org/index.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
