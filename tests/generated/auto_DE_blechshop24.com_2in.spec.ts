import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blechshop24.com_2in', ['https://blechshop24.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
