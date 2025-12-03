import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_raiffeisen.com_6p9', ['https://www.raiffeisen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
