import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_experts.anwb.nl_kfh', ['https://experts.anwb.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
