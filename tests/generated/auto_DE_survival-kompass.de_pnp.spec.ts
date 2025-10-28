import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_survival-kompass.de_pnp', ['https://survival-kompass.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
