import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_docs.gradle.org_i5u', ['https://docs.gradle.org/current/userguide/userguide.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
