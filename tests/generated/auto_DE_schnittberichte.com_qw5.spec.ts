import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schnittberichte.com_qw5', ['https://www.schnittberichte.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
