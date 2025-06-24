import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_docs.gradle.org_0', ['https://docs.gradle.org/current/userguide/userguide.html'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
