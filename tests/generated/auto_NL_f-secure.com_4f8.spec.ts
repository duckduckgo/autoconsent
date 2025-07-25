import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_f-secure.com_4f8', ['https://www.f-secure.com/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
