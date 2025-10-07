import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_onderwijskennis.nl_1rh', ['https://www.onderwijskennis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
