import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_distrelec.nl_dzt', ['https://www.distrelec.nl/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
