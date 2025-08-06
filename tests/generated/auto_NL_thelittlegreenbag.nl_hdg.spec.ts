import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_thelittlegreenbag.nl_hdg', ['https://www.thelittlegreenbag.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
