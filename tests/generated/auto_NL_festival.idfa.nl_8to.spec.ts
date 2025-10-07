import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_festival.idfa.nl_8to', ['https://festival.idfa.nl/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
