import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_meinfrankreich.com_a8o', ['https://meinfrankreich.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
