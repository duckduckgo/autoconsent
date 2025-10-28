import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_archeon.nl_7dd', ['https://www.archeon.nl/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
