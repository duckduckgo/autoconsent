import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_doemee.leiden.nl_x92', ['https://doemee.leiden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
