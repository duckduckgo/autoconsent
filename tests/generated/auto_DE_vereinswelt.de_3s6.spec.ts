import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vereinswelt.de_3s6', ['https://www.vereinswelt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
