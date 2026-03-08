import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_engelnetze.com_6us', ['https://engelnetze.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
