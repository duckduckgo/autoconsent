import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_survival-kompass.de_475', ['https://survival-kompass.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
