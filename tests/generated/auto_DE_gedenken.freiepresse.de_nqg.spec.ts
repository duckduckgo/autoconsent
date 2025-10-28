import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gedenken.freiepresse.de_nqg', ['https://gedenken.freiepresse.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
