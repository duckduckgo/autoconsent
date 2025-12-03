import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_student.universiteitleiden.nl_hvs', ['https://www.student.universiteitleiden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
