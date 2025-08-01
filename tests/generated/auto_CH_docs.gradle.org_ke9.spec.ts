import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_docs.gradle.org_ke9', ['https://docs.gradle.org/current/userguide/userguide.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
