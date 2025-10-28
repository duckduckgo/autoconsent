import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wolles-elektronikkiste.de_gw6', ['https://wolles-elektronikkiste.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
