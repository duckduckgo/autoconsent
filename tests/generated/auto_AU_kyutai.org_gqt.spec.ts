import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_kyutai.org_gqt', ['https://kyutai.org/blog/2026-01-13-pocket-tts'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
