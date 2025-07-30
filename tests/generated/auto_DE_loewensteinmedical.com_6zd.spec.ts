import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_loewensteinmedical.com_6zd', ['https://loewensteinmedical.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
