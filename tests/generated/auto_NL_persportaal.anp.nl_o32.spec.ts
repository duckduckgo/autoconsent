import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_persportaal.anp.nl_o32', ['https://persportaal.anp.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
