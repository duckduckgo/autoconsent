import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_profiles.uts.edu.au_ouv', ['https://profiles.uts.edu.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
