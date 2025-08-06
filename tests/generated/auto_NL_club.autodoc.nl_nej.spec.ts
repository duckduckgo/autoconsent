import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_club.autodoc.nl_nej', ['https://club.autodoc.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
