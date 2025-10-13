import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vastgoedjournaal.nl_2wy', ['https://vastgoedjournaal.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
