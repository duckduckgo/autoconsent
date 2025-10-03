import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_centraalbeheer.nl_ooy', ['https://www.centraalbeheer.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
