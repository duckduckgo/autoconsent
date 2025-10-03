import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_galaxyclub.nl_swt', ['https://www.galaxyclub.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
