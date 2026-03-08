import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eilandhoteltexel.nl_omm', ['https://eilandhoteltexel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
