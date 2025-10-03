import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_experts.anwb.nl_8kh', ['https://experts.anwb.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
