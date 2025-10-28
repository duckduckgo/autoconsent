import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bus-und-bahn.de_2hj', ['https://www.bus-und-bahn.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
