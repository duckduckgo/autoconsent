import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_glasfaserforum.de_xb5', ['https://www.glasfaserforum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
