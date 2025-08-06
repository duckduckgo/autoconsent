import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_centraalbeheer.nl_1zf', ['https://www.centraalbeheer.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
