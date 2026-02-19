import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_hachettebookgroup.com_t5n', ['https://www.hachettebookgroup.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
