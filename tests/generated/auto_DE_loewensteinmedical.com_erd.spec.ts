import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_loewensteinmedical.com_erd', ['https://loewensteinmedical.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
