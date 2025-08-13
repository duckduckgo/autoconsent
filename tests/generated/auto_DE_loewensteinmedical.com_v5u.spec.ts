import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_loewensteinmedical.com_v5u', ['https://loewensteinmedical.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
