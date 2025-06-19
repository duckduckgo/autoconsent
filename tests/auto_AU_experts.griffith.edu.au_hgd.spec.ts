import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_experts.griffith.edu.au_hgd', ['https://experts.griffith.edu.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
