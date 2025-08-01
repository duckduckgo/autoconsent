import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_raiffeisen.com_p5l', ['https://www.raiffeisen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
