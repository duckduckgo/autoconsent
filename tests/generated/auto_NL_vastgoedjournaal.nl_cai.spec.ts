import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vastgoedjournaal.nl_cai', ['https://vastgoedjournaal.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
