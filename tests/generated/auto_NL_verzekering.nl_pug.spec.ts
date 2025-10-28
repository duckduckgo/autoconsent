import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_verzekering.nl_pug', ['https://www.verzekering.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
