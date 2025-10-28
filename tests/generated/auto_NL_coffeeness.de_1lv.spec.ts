import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_coffeeness.de_1lv', ['https://www.coffeeness.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
