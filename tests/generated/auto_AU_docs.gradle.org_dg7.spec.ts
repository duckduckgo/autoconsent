import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_docs.gradle.org_dg7', ['https://docs.gradle.org/current/userguide/userguide.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
