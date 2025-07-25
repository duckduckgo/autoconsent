import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_autovoordeelwinkel.nl_qx8', ['https://www.autovoordeelwinkel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
