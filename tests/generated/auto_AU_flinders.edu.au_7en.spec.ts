import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_flinders.edu.au_7en', ['https://www.flinders.edu.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
