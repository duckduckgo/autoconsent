import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_staff.flinders.edu.au_cpu', ['https://staff.flinders.edu.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
