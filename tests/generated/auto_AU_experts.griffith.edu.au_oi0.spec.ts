import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_experts.griffith.edu.au_oi0', ['https://experts.griffith.edu.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
