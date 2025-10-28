import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stamboomfamilie.nl_xtj', ['https://www.stamboomfamilie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
