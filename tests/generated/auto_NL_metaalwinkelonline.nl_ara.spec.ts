import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_metaalwinkelonline.nl_ara', ['https://www.metaalwinkelonline.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
