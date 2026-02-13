import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_uk.pinterest.com_sy2', ['https://uk.pinterest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
