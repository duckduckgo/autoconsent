import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_docs.gradle.org_1bh', ['https://docs.gradle.org/current/userguide/userguide.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
