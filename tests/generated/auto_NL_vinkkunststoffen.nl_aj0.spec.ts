import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vinkkunststoffen.nl_aj0', ['https://www.vinkkunststoffen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
