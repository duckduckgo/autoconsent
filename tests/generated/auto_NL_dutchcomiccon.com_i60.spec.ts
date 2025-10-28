import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dutchcomiccon.com_i60', ['https://www.dutchcomiccon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
