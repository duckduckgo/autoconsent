import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dakdragerwinkel.nl_u4t', ['https://www.dakdragerwinkel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
