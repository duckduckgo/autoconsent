import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schnittberichte.com_das', ['https://www.schnittberichte.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
