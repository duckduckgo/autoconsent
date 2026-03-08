import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_english.ajax.nl_ejo', ['https://english.ajax.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
