import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_br.pinterest.com_t2j', ['https://br.pinterest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
