import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ebel-kliniken.com_3w7', ['https://ebel-kliniken.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
