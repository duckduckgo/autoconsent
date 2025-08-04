import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_staff.universiteitleiden.nl_5kx', ['https://www.staff.universiteitleiden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
