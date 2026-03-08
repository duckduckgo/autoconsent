import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_brilon-totallokal.de_uoz', ['https://brilon-totallokal.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
