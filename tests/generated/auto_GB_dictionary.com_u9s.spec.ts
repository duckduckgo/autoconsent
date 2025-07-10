import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dictionary.com_u9s', ['https://www.dictionary.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
