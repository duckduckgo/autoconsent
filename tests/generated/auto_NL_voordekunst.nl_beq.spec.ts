import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_voordekunst.nl_beq', ['https://www.voordekunst.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
