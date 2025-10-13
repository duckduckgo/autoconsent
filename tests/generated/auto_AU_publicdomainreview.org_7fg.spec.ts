import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_publicdomainreview.org_7fg', ['https://publicdomainreview.org/essay/dancing-naked-on-the-head-of-a-pin/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
