import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_caravan-wendt.de_stj', ['https://www.caravan-wendt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
