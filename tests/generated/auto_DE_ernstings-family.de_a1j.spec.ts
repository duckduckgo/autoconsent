import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ernstings-family.de_a1j', ['https://www.ernstings-family.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
