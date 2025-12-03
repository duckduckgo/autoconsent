import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_publicdomainreview.org_7fg', ['https://publicdomainreview.org/features/entering-the-public-domain/2026/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
