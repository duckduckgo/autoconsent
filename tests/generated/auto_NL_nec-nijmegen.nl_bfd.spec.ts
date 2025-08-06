import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nec-nijmegen.nl_bfd', ['https://www.nec-nijmegen.nl/home.htm'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
