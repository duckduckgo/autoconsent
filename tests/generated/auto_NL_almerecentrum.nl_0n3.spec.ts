import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_almerecentrum.nl_0n3', ['https://www.almerecentrum.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
