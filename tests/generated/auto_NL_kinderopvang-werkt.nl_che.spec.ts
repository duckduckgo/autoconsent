import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kinderopvang-werkt.nl_che', ['https://www.kinderopvang-werkt.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
