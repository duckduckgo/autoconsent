import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_filmhuis-lumen.nl_xxn', ['https://filmhuis-lumen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
