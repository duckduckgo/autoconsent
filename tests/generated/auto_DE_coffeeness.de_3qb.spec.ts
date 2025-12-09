import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_coffeeness.de_3qb', ['https://www.coffeeness.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
