import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_flinders.edu.au_o38', ['https://www.flinders.edu.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
