import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_centraalbeheer.nl_tm2', ['https://www.centraalbeheer.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
