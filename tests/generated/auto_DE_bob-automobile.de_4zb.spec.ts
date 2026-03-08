import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bob-automobile.de_4zb', ['https://bob-automobile.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
