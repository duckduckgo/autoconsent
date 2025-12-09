import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_spellenwinkel.nl_xy8', ['https://www.spellenwinkel.nl/en-WW'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
