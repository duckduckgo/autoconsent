import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_festival.idfa.nl_zax', ['https://festival.idfa.nl/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
