import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_student.universiteitleiden.nl_mha', ['https://www.student.universiteitleiden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
