import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_chessnextmove.ai_b1h', ['https://chessnextmove.ai/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
