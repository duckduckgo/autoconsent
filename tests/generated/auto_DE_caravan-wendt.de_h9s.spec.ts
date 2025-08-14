import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_caravan-wendt.de_h9s', ['https://www.caravan-wendt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
