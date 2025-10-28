import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nunotariaat.nl_oox', ['https://www.nunotariaat.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
