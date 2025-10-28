import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_almerecentrum.nl_svc', ['https://www.almerecentrum.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
