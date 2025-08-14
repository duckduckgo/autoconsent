import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vereinswelt.de_wu9', ['https://www.vereinswelt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
