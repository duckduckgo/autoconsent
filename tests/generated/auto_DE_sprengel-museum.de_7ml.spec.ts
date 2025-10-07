import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sprengel-museum.de_7ml', ['https://www.sprengel-museum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
