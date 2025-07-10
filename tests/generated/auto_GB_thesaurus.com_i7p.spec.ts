import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thesaurus.com_i7p', ['https://www.thesaurus.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
