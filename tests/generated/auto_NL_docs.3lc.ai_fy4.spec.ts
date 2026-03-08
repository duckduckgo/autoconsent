import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_docs.3lc.ai_fy4', ['https://docs.3lc.ai/3lc/latest/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
