import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_account.lavita.com_em7', ['https://account.lavita.com/de?region=DE'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
