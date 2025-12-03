import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_experts.deakin.edu.au_0kw', ['https://experts.deakin.edu.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
