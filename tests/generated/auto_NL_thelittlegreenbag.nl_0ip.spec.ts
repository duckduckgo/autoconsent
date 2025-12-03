import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_thelittlegreenbag.nl_0ip', ['https://www.thelittlegreenbag.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
