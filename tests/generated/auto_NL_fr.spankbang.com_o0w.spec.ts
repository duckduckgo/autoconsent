import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fr.spankbang.com_o0w', ['https://fr.spankbang.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
