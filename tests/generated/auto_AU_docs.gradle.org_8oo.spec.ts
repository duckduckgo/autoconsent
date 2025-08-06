import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_docs.gradle.org_8oo', ['https://docs.gradle.org/current/userguide/userguide.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
