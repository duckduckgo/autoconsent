import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_experts.swinburne.edu.au_j61', ['https://experts.swinburne.edu.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
