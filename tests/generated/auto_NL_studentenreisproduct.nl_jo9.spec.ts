import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_studentenreisproduct.nl_jo9', ['https://www.studentenreisproduct.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
