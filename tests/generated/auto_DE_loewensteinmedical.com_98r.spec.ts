import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_loewensteinmedical.com_98r', ['https://loewensteinmedical.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
