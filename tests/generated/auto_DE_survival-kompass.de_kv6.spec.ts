import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_survival-kompass.de_kv6', ['https://survival-kompass.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
