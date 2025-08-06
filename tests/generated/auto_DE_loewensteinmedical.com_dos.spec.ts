import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_loewensteinmedical.com_dos', ['https://loewensteinmedical.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
