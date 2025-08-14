import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dakdragerwinkel.nl_5il', ['https://www.dakdragerwinkel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
