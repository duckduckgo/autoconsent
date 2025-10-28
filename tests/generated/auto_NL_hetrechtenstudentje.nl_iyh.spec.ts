import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hetrechtenstudentje.nl_iyh', ['https://www.hetrechtenstudentje.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
