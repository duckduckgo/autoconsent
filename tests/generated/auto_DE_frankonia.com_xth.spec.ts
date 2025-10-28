import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_frankonia.com_xth', ['https://www.frankonia.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
