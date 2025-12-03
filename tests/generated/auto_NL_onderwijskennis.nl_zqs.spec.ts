import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_onderwijskennis.nl_zqs', ['https://www.onderwijskennis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
