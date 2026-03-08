import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_careers.tudelft.nl_i55', ['https://careers.tudelft.nl/go/All-jobs/9021002/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
