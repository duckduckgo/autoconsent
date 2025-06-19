import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_experts.griffith.edu.au_hye', ['https://experts.griffith.edu.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
