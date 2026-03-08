import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_br.spankbang.com_fu6', ['https://br.spankbang.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
