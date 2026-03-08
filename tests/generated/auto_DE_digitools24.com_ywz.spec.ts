import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_digitools24.com_ywz', ['https://digitools24.com/index.php/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
