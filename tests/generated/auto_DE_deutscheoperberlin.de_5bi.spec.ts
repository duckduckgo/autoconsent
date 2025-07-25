import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_deutscheoperberlin.de_5bi', ['https://deutscheoperberlin.de/de_DE/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
