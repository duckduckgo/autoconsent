import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_profiles.uts.edu.au_swb', ['https://profiles.uts.edu.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
