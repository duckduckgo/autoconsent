import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vereinswelt.de_ljr', ['https://www.vereinswelt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
