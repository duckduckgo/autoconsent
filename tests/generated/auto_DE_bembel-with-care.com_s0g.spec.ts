import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bembel-with-care.com_s0g', ['https://bembel-with-care.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
