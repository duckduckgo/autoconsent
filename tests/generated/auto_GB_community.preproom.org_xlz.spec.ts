import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_community.preproom.org_xlz', ['https://community.preproom.org/index.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
